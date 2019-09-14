import React from 'react';

const ArtistCovers = (props) => {
    return (
        <div className="coversDiv">
            <img className="coversImg" src={`${props.src}${props.cover}.jpg`} />
        </div>
    )
}

export default ArtistCovers;