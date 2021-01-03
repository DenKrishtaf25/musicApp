import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    setSongs,
    libraryStatus, themStatus, setThemStatus
}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <div className="check-wrapper">
                <div className="main">
                    <input className="l" type="checkbox" onClick={() => setThemStatus(!themStatus)} />
                </div>
            </div>
            <div className="library__songs">
                {songs.map(song =>
                    <LibrarySong
                        song={song}
                        songs={songs}
                        setCurrentSong={setCurrentSong}
                        id={song.id}
                        key={song.id}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                    />
                )}
            </div>
        </div>
    )
}

export default Library;