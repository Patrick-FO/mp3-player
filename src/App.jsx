import { useState, useEffect, useRef } from 'react'
import './App.css'
import HeaderSection from './HeaderSection.jsx'
import FileListSection from './FileListSection.jsx'
import MediaPlayer from './MediaPlayer.jsx'
import FileEditor from './FileEditor.jsx'

function App() {

  const [audioDatabase, setAudioDatabase] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null); 
  const audioRef = useRef(null); 

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
      <HeaderSection audioRef={audioRef} />
      <main>
        <FileListSection audioDatabase={audioDatabase} setAudioDatabase={setAudioDatabase} selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack} />
        <div className="right-section">
          <MediaPlayer selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack} audioDatabase={audioDatabase} audioRef={audioRef} />
          <FileEditor setAudioDatabase={setAudioDatabase} />
        </div>
      </main>
    </>
  ); 
}

export default App
