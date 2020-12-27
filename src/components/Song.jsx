import React from 'react';


const Song = ({ currentSong, rotateImg}) => {
    return (
        <div className="song-container">
            <img className={`song-container__img ${rotateImg ? 'song-container__img-active' : ''}`} alt={currentSong.name} src={currentSong.cover}/>
            <h1>{currentSong.name}</h1>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}


export default Song;