import React, { useState, useEffect } from 'react'; 
import { FaVolumeOff } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";

function HeaderSection({audioRef}) {

    const [volume, setVolume] = useState(1); 

    const handleRange = (e) => {
        const newVolume = parseFloat(e.target.value); 
        setVolume(newVolume); 
        audioRef.current.volume = newVolume; 
    }

    useEffect(() => {
        setVolume(1); 
    }, [])

    return (
        <header>
            <h1>Patrick's mp3 player</h1>
            <div className="volume-slider-section">
                <FaVolumeOff />
                <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleRange} />
                <FaVolumeUp />
            </div>
        </header>
    );
}

export default HeaderSection