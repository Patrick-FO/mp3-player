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
        
        try {
            const token = await auth.currentUser.getIdToken();
            const formData = new FormData();
            
            if (file) {
                formData.append('file', file, file.name);
                console.log('Adding file:', { 
                    name: file.name, 
                    size: file.size, 
                    type: file.type 
                });
            }
            
            formData.append('title', title);
            
            if (cover) {
                formData.append('coverImage', cover, cover.name);
                console.log('Adding cover:', { 
                    name: cover.name, 
                    size: cover.size, 
                    type: cover.type 
                });
            }

            setUploadStatus('Uploading...');
            
            const response = await fetch(`${API_BASE_URL}/api/tracks/upload`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.error || 'Upload failed');
            }

            const tracksResponse = await fetch(`${API_BASE_URL}/api/tracks`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            if (!tracksResponse.ok) {
                throw new Error('Failed to fetch updated tracks');
            }

            const tracks = await tracksResponse.json();
            setAudioDatabase(tracks);
            
            setUploadStatus('Upload successful!');
            setFile(null);
            setTitle('Your MP3');
            setCover(null);
            e.target.reset();
            
        } catch (error) {
            console.error('Upload error:', error);
            setUploadStatus(`Upload failed: ${error.message}`);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            console.log('File selected:', {
                name: selectedFile.name,
                size: selectedFile.size,
                type: selectedFile.type
            });
            setFile(selectedFile);
        }
    };

    const handleCoverChange = (e) => {
        const selectedCover = e.target.files[0];
        if (selectedCover) {
            console.log('Cover selected:', {
                name: selectedCover.name,
                size: selectedCover.size,
                type: selectedCover.type
            });
            setCover(selectedCover);
        }
    };

    return (
        <div className="file-editor">
            <h2>File Editor</h2>
            <form onSubmit={submitHandler}>
                <div className="form-section">
                    <label htmlFor="file">MP3 File: </label>
                    <input 
                        type="file" 
                        id="file" 
                        name="file" 
                        accept="audio/mp3" 
                        onChange={handleFileChange}
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
                        onChange={handleCoverChange}
                    />
                </div>

                <button type="submit">Upload</button>
            </form>
            {uploadStatus && (
                <div className="upload-status">
                    {uploadStatus}
                </div>
            )}
        </div>
    );
}

export default FileEditor;