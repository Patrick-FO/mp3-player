import React, { useEffect, useState, useRef } from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { FaRegPauseCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import { IoPlayBackCircleOutline } from "react-icons/io5";
import { IoPlayBackCircle } from "react-icons/io5";
import { IoPlayForwardCircleOutline } from "react-icons/io5";
import { IoPlayForwardCircle } from "react-icons/io5";

function MediaPlayer({ selectedTrack, setSelectedTrack, audioDatabase, audioRef }) {

    const [hoveredButton, setHoveredButton] = useState(null);
    const [playing, setPlaying] = useState(false); 
    const [currentTime, setCurrentTime] = useState(0); 
    const [duration, setDuration] = useState(0);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const playToggle = () => {
        if (!playing) {
            audioRef.current.play(); 
        } else {
            audioRef.current.pause(); 
        }
        setPlaying(!playing); 
    }

    const rewindHandler = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
        }
    }

    const previousHandler = () => {
        const currentIndex = audioDatabase.findIndex(track => track.id === selectedTrack.id);
        if (currentIndex > 0) {
            const previousTrack = audioDatabase[currentIndex - 1]; 
            const trackWithUrl = {
                ...previousTrack,
                audioUrl: URL.createObjectURL(previousTrack.fileSource),
                coverUrl: previousTrack.cover ? URL.createObjectURL(previousTrack.cover) : null
            };
            setSelectedTrack(trackWithUrl);
        }
    }

    const nextHandler = () => {
        const currentIndex = audioDatabase.findIndex(track => track.id === selectedTrack.id);
        if (currentIndex + 1 < audioDatabase.length) {
            const nextTrack = audioDatabase[currentIndex + 1];
            const trackWithUrl = {
                ...nextTrack,
                audioUrl: URL.createObjectURL(nextTrack.fileSource),
                coverUrl: nextTrack.cover ? URL.createObjectURL(nextTrack.cover) : null
            };
        setSelectedTrack(trackWithUrl);
        }
    }

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

    useEffect(() => {
        if (!audioRef.current) return;
        
        const audio = audioRef.current;
        audio.load();

        if (playing) {
            const playWhenReady = () => {
                audio.play()
                    .catch(error => console.error('Error auto-playing track:', error));
                audio.removeEventListener('loadeddata', playWhenReady);
            };
            audio.addEventListener('loadeddata', playWhenReady);
        }

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        const handleEnded = () => {
            setPlaying(false);
            setCurrentTime(0);
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('ended', handleEnded);

        return () => {
            if (audio) {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audio.removeEventListener('ended', handleEnded);
            }
        };
    }, [selectedTrack]);

    useEffect(() => {
        if (selectedTrack) {
            if (currentTime === duration) {
                playToggle(); 
                setCurrentTime(0); 
            }
        }
    }, [currentTime]); 

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
            <audio controls src={selectedTrack.audioUrl} ref={audioRef} /> 
            <div className="slider-section">
                <p>{formatTime(currentTime)}</p>
                <input
                    className="slider"
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    onChange={(e) => {
                        const time = parseFloat(e.target.value);
                        audioRef.current.currentTime = time;
                    }}
                />
                <p>{formatTime(duration)}</p>
            </div>
            <div className="button-section">
                {hoveredButton === 'rewind' ? 
                    <IoPlayBackCircle 
                        className="button" 
                        onClick={rewindHandler} 
                        onDoubleClick={nextHandler}
                        onMouseLeave={() => setHoveredButton(null)}
                    /> :
                    <IoPlayBackCircleOutline 
                        className="button" 
                        onClick={rewindHandler} 
                        onDoubleClick={nextHandler}
                        onMouseEnter={() => setHoveredButton('rewind')}
                    />
                }
                
                {playing ? 
                    (hoveredButton === 'play' ? 
                        <FaCirclePause 
                            className="button" 
                            onClick={playToggle}
                            onMouseLeave={() => setHoveredButton(null)}
                        /> :
                        <FaRegPauseCircle 
                            className="button" 
                            onClick={playToggle}
                            onMouseEnter={() => setHoveredButton('play')}
                        />
                    ) : 
                    (hoveredButton === 'play' ? 
                        <FaCirclePlay 
                            className="button" 
                            onClick={playToggle}
                            onMouseLeave={() => setHoveredButton(null)}
                        /> :
                        <FaRegPlayCircle 
                            className="button" 
                            onClick={playToggle}
                            onMouseEnter={() => setHoveredButton('play')}
                        />
                    )
                }
                
                {hoveredButton === 'forward' ? 
                    <IoPlayForwardCircle 
                        className="button" 
                        onClick={previousHandler}
                        onMouseLeave={() => setHoveredButton(null)}
                    /> :
                    <IoPlayForwardCircleOutline 
                        className="button" 
                        onClick={previousHandler}
                        onMouseEnter={() => setHoveredButton('forward')}
                    />
                }
            </div>
        </div>
    );
}

export default MediaPlayer