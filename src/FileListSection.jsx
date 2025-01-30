import React, { useCallback, useEffect } from 'react';
import { auth } from './firebase.js';  

function FileListSection({ audioDatabase, setAudioDatabase, selectedTrack, setSelectedTrack }) {

    useEffect(() => {
        const fetchTracks = async () => {
        if (!auth.currentUser) return; 
        
        try {
            const token = await auth.currentUser.getIdToken();
            const response = await fetch('http://production-env.eba-fbx3qqzr.eu-north-1.elasticbeanstalk.com/api/tracks', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
            });
            const tracks = await response.json();
            setAudioDatabase(tracks);
        } catch (error) {
            console.error('Error fetching tracks:', error);
        }
        };
    
        fetchTracks();
    }, []);

    const createTrackWithUrls = useCallback((audio) => {
        return {
            ...audio,
            audioUrl: audio.audioUrl, 
            coverUrl: audio.coverUrl 
        };
    }, []);

    const handleClickSelect = useCallback((audio) => {
        if (!audio || selectedTrack?.id === audio.id) return;
        
        try {
            const trackWithUrl = createTrackWithUrls(audio);
            if (trackWithUrl) {
                setSelectedTrack(trackWithUrl);
            }
        } catch (error) {
            console.error('Error selecting track:', error);
        }
    }, [selectedTrack, createTrackWithUrls]);

      const handleClickRemove = async (index, event) => {
        event.stopPropagation();
        
        try {
            const token = await auth.currentUser.getIdToken();
            const trackToRemove = audioDatabase[index];
            const response = await fetch(`production-env.eba-fbx3qqzr.eu-north-1.elasticbeanstalk.com/api/tracks/${trackToRemove.id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete track');
            }
    
            const newDatabase = audioDatabase.filter((_, i) => i !== index);
            setAudioDatabase(newDatabase);
            
        } catch (error) {
            console.error('Error removing track:', error);
        }
    };

    return (
        <div className="file-list">
          <h2>File List</h2>
          {audioDatabase.length > 0 ? (
            <ol>
            {audioDatabase.map((audio, i) => (
              <li key={i} className="file-list-item" style={{ backgroundColor: selectedTrack?.id === audio.id ? '#dcf2ff' : 'transparent' }}>
                <div className="file-title" onClick={() => handleClickSelect(audio)}>
                  {audio.title}
                </div>
                <button onClick={(e) => handleClickRemove(i, e)} className="remove-button">X</button>
              </li>
            ))}
          </ol>) : <p>Please add some files</p>}
        </div>
    );
}

export default FileListSection 