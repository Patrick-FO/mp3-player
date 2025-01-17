import React, { useEffect } from 'react'

function MediaPlayer({ selectedTrack }) {

    useEffect(() => {
        return () => {
            if (selectedTrack) {
                if (selectedTrack.audioUrl) {
                    URL.revokeObjectURL(selectedTrack.audioUrl);
                }
                if (selectedTrack.coverUrl) {
                    URL.revokeObjectURL(selectedTrack.coverUrl); 
                }
            }
        };
    }, [selectedTrack?.id]); 

    if (!selectedTrack) {
        return (
            <div className="media-player">
                <h2>Media Player</h2>
                <p>Select a track to play</p>
            </div>
        );
    }

    return (
        <div className="media-player">
            <h2>Media Player</h2>
            {selectedTrack.coverUrl && <img src={selectedTrack.coverUrl} />}
            <h3>{selectedTrack.title}</h3>
            <audio controls src={selectedTrack.audioUrl} /> 
          </div>
    );
}

export default MediaPlayer