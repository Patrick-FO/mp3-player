import React, { useCallback } from 'react'

function FileListSection({ audioDatabase, setAudioDatabase, selectedTrack, setSelectedTrack }) {

    const createTrackWithUrls = useCallback((audio) => {
      try {
          return {
              ...audio,
              audioUrl: URL.createObjectURL(audio.fileSource),
              coverUrl: audio.cover ? URL.createObjectURL(audio.cover) : null
          };
      } catch (error) {
          console.error('Error creating URLs for track:', error);
          return null;
      }
    }, []);

    const cleanupTrackUrls = useCallback((track) => {
        if (!track) return;
        
        try {
            if (track.audioUrl) {
                URL.revokeObjectURL(track.audioUrl);
            }
            if (track.coverUrl) {
                URL.revokeObjectURL(track.coverUrl);
            }
        } catch (error) {
            console.error('Error cleaning up track URLs:', error);
        }
    }, []);

    const handleClickSelect = useCallback((audio) => {
        if (!audio || selectedTrack?.id === audio.id) return;

        try {
            cleanupTrackUrls(selectedTrack);
            
            const trackWithUrl = createTrackWithUrls(audio);
            if (trackWithUrl) {
                setSelectedTrack(trackWithUrl);
            }
        } catch (error) {
            console.error('Error selecting track:', error);
        }
    }, [selectedTrack, cleanupTrackUrls, createTrackWithUrls]);

    const handleClickRemove = useCallback((index, event) => {
        event.stopPropagation();
        
        try {
            const audioToRemove = audioDatabase[index];
            const isRemovingSelected = selectedTrack?.id === audioToRemove?.id;

            const newDatabase = audioDatabase.filter((_, i) => i !== index);
            
            if (isRemovingSelected) {
                cleanupTrackUrls(selectedTrack);

                if (newDatabase.length > 0) {
                    const nextIndex = Math.min(index, newDatabase.length - 1);
                    const nextTrack = newDatabase[nextIndex];
                    const nextTrackWithUrl = createTrackWithUrls(nextTrack);
                    
                    setAudioDatabase(newDatabase);
                    if (nextTrackWithUrl) {
                        setSelectedTrack(nextTrackWithUrl);
                    }
                } else {
                    setAudioDatabase([]);
                    setSelectedTrack(null);
                }
            } else {
                setAudioDatabase(newDatabase);
            }
        } catch (error) {
            console.error('Error removing track:', error);
        }
  }, [audioDatabase, selectedTrack, cleanupTrackUrls, createTrackWithUrls]);

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