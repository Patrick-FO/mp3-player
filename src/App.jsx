import { useState, useEffect } from 'react'
import './App.css'
import FileListSection from './FileListSection.jsx'
import MediaPlayer from './MediaPlayer.jsx'
import FileEditor from './FileEditor.jsx'
import fileDatabase from './fileDatabase.js'

function App() {

  const [audioDatabase, setAudioDatabase] = useState(fileDatabase); 
  const [selectedTrack, setSelectedTrack] = useState(null); 

  useEffect(() => {
    return () => {
      audioDatabase.forEach(track => {
        if (track.url) {
          URL.revokeObjectURL(track.url);
        }
      });
    };
  }, []);

  return (
    <>
      <header>
        <h1>Patrick's mp3 player</h1>
      </header>
      <main>
        <FileListSection audioDatabase={audioDatabase} setSelectedTrack={setSelectedTrack} setAudioDatabase={setAudioDatabase} />
        <div className="right-section">
          <MediaPlayer selectedTrack={selectedTrack} />
          <FileEditor setAudioDatabase={setAudioDatabase} />
        </div>
      </main>
    </>
  ); 
}

export default App
