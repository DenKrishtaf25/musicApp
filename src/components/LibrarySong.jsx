import React from 'react';


const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {

    const songSelectHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === id);
        await setCurrentSong(selectedSong[0]);
        //add active state
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs)
        //check if the song is playing
        if (isPlaying) audioRef.current.play();
    }

    return (
        <div onClick={songSelectHandler} className={`library__song ${song.active ? 'selected' : ""}`}>
            <img alt={song.name} src={song.cover} />
            <div className="library__song-descr">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}


export default LibrarySong;