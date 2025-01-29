import React, { useState, useEffect } from 'react'; 
import { FaVolumeOff } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

function HeaderSection({audioRef}) {

    const [volume, setVolume] = useState(1); 
    const navigate = useNavigate();
    const auth = getAuth();

    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate('/auth');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

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
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </header>
    );
}

export default HeaderSection