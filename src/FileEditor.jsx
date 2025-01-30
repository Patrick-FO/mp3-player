import React, { useState } from 'react';
import { auth } from './firebase.js'; 
import { API_BASE_URL } from './config.js';

function FileEditor({ setAudioDatabase }) {

    const [file, setFile] = useState(null); 
    const [title, setTitle] = useState('Your MP3'); 
    const [cover, setCover] = useState(null); 
    const [uploadStatus, setUploadStatus] = useState('');

    const submitHandler = async (e) => {
      e.preventDefault();
      
      const token = await auth.currentUser.getIdToken();
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', title);
      if (cover) {
          formData.append('coverImage', cover);
      }
  
      try {
          setUploadStatus('Uploading...');
          
          const response = await fetch(`${API_BASE_URL}/api/tracks/upload`, {
              method: 'POST',
              headers: {
                  'Authorization': `Bearer ${token}`
              },
              body: formData
          });
  
          if (!response.ok) {
              throw new Error('Upload failed');
          }
  
          const tracksResponse = await fetch(`${API_BASE_URL}/api/tracks`, {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          });
          const tracks = await tracksResponse.json();
          setAudioDatabase(tracks);
          
          setUploadStatus('Upload successful!');
          setFile(null);
          setTitle('');
          setCover(null);
          e.target.reset();
          
      } catch (error) {
          console.error('Error:', error);
          setUploadStatus('Upload failed');
      }
  };

    return (
        <div className="file-editor">
            <h2>File Editor</h2>
            <form onSubmit={submitHandler} >

                <div className="form-section">
                    <label htmlFor="file">MP3 File: </label>
                    <input 
                        type="file" 
                        id="file" 
                        name="file" 
                        accept="audio/mp3" 
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                    />
                </div>


                <div className="form-section">
                    <label htmlFor="title">File Name: </label>
                    <input 
                        type="text" 
                        id="title" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="form-section">
                    <label htmlFor="cover">Cover Image (Optional): </label>
                    <input 
                        type="file" 
                        id="cover" 
                        name="cover" 
                        accept="image/png, image/jpg, image/jpeg" 
                        onChange={(e) => setCover(e.target.files[0])}
                    />
                </div>

                <input type="submit" id="submit" />
            </form>
          </div>
    );
}

export default FileEditor 