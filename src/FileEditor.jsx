import React, { useState } from 'react'

function FileEditor({ setAudioDatabase }) {

    const [file, setFile] = useState(null); 
    const [title, setTitle] = useState('Your MP3'); 
    const [cover, setCover] = useState(null); 

    const submitHandler = (e) => {
        e.preventDefault(); 

        setAudioDatabase((prev) => {
            const newTrack = {
                id: Date.now(),
                fileSource: file, 
                title: title, 
                cover: cover, 
            }
            return [newTrack, ...prev]; 
        })

        setFile(null); 
        setTitle(''); 
        setCover(null); 

        e.target.reset; 

    }

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
                        accept="image/png, image/jpg" 
                        onChange={(e) => setCover(e.target.files[0])}
                    />
                </div>

                <input type="submit" id="submit" />
            </form>
          </div>
    );
}

export default FileEditor 