import React from 'react'

function FileListSection({ audioDatabase, setSelectedTrack, setAudioDatabase }) {

    function handleClickSelect(audio) {
      const trackWithUrl = {
        ...audio, 
        audioUrl: URL.createObjectURL(audio.fileSource), 
        coverUrl: audio.cover ? URL.createObjectURL(audio.cover) : null
      }; 
      setSelectedTrack(trackWithUrl); 
    }

    function handleClickRemove(index, event) {
      event.stopPropagation(); 
      setAudioDatabase(prev => {
        return prev.filter((_, i) => i !== index); 
      }); 
      setSelectedTrack(null); 
    }

    return (
        <div className="file-list">
          <h2>File List</h2>
          {audioDatabase.length > 0 ? (
            <ol>
            {audioDatabase.map((audio, i) => (
              <li key={i} className="file-list-item">
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