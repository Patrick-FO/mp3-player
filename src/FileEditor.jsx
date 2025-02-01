import React, { useState } from 'react';
import { auth } from './firebase.js'; 
import { API_BASE_URL } from './config.js';

function FileEditor({ setAudioDatabase }) {
    const [file, setFile] = useState(null); 
    const [title, setTitle] = useState('Your MP3'); 
    const [cover, setCover] = useState(null); 
    const [uploadStatus, setUploadStatus] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);

    const submitHandler = async (e) => {
        e.preventDefault();
        
        try {
            const token = await auth.currentUser.getIdToken();
            const formData = new FormData();
            
            if (file && file.size > 0) {
                formData.append('file', file);
            }
            
            formData.append('title', title);
            if (cover) {
                formData.append('coverImage', cover);
            }

            setUploadStatus('Uploading...');
            setUploadProgress(0);
            
            const xhr = new XMLHttpRequest();
            xhr.open('POST', `${API_BASE_URL}/api/tracks/upload`, true);
            xhr.setRequestHeader('Authorization', `Bearer ${token}`);
            
            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const progress = (event.loaded / event.total) * 100;
                    setUploadProgress(Math.round(progress));
                    setUploadStatus(`Uploading... ${Math.round(progress)}%`);
                }
            };

            xhr.onload = async function() {
                if (xhr.status === 201) {
                    // Success
                    const tracksResponse = await fetch(`${API_BASE_URL}/api/tracks`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    
                    const tracks = await tracksResponse.json();
                    setAudioDatabase(tracks);
                    
                    setUploadStatus('Upload successful!');
                    setFile(null);
                    setTitle('Your MP3');
                    setCover(null);
                    e.target.reset();
                } else {
                    // Error
                    let errorMessage;
                    try {
                        const response = JSON.parse(xhr.responseText);
                        errorMessage = response.error;
                    } catch (e) {
                        errorMessage = 'Upload failed';
                    }
                    throw new Error(errorMessage);
                }
            };

            xhr.onerror = function() {
                throw new Error('Network error occurred');
            };

            xhr.send(formData);
            
        } catch (error) {
            console.error('Upload error:', error);
            setUploadStatus(`Upload failed: ${error.message}`);
            setUploadProgress(0);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile.size > 50 * 1024 * 1024) { 
                alert('File is too large. Please select a file under 50MB.');
                e.target.value = ''; 
                return;
            }
            setFile(selectedFile);
        }
    };

    const handleCoverChange = (e) => {
        const selectedCover = e.target.files[0];
        if (selectedCover) {
            if (selectedCover.size > 5 * 1024 * 1024) {
                alert('Cover image is too large. Please select an image under 5MB.');
                e.target.value = '';
                return;
            }
            setCover(selectedCover);
        }
    };

    return (
        <div className="file-editor">
            <h2>File Editor</h2>
            <form onSubmit={submitHandler}>
                <div className="form-section">
                    <label htmlFor="file">MP3 File (max 50MB): </label>
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
                    <label htmlFor="cover">Cover Image (Optional, max 5MB): </label>
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
                    {uploadProgress > 0 && uploadProgress < 100 && (
                        <div className="progress-bar">
                            <div 
                                className="progress" 
                                style={{width: `${uploadProgress}%`}}
                            ></div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default FileEditor;