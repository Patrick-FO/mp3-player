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
            setSelectedTrack(previousTrack); 
        }
    }
    
    const nextHandler = () => {
        const currentIndex = audioDatabase.findIndex(track => track.id === selectedTrack.id);
        if (currentIndex + 1 < audioDatabase.length) {
            const nextTrack = audioDatabase[currentIndex + 1];
            setSelectedTrack(nextTrack); 
        }
    }

    useEffect(() => {

        if (!selectedTrack) return;
        console.log('Selected Track Details:', {
            id: selectedTrack.id,
            title: selectedTrack.title,
            url: selectedTrack.audioUrl
        });
    
        fetch(selectedTrack.audioUrl)
            .then(response => {
                console.log('URL Response:', {
                    status: response.status,
                    statusText: response.statusText,
                    headers: Object.fromEntries(response.headers.entries())
                });
                return response.blob();
            })
            .then(blob => {
                console.log('Content Type:', blob.type);
            })
            .catch(error => {
                console.error('Fetch Error:', error);
            });

        if (!audioRef.current) return;
        
        const audio = audioRef.current;
        console.log('Loading audio URL:', selectedTrack?.audioUrl);
        audio.load();

        audio.addEventListener('error', (e) => {
            console.error('Audio error:', e);
            console.error('Audio error details:', audio.error);
        });

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
            {console.log('Selected Track:', selectedTrack)}
            {console.log('Audio URL:', selectedTrack?.audioUrl)}
            <h2>Media Player</h2>
            {selectedTrack.coverUrl && <img src={selectedTrack.coverUrl} />}
            <h3>{selectedTrack.title}</h3>
            <audio 
                ref={audioRef}
                preload="metadata"
                onError={(e) => {
                    console.error('Audio Error:', {
                        error: e.target.error,
                        networkState: audioRef.current.networkState,
                        readyState: audioRef.current.readyState,
                        src: audioRef.current.src
                    });
                }}
            > 
                <source src={selectedTrack.audioUrl} type="audio/mpeg" />
                <source src={selectedTrack.audioUrl} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
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
                        onDoubleClick={previousHandler}
                        onMouseLeave={() => setHoveredButton(null)}
                    /> :
                    <IoPlayBackCircleOutline 
                        className="button" 
                        onClick={rewindHandler} 
                        onDoubleClick={previousHandler}
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
                        onClick={nextHandler}
                        onMouseLeave={() => setHoveredButton(null)}
                    /> :
                    <IoPlayForwardCircleOutline 
                        className="button" 
                        onClick={nextHandler}
                        onMouseEnter={() => setHoveredButton('forward')}
                    />
                }
            </div>
        </div>
    );
}

export default MediaPlayer