import React from 'react';

const PlayerAvatar = (props) => {

    const source = '/images/avatar.png';
    return (
        <div>
            <img alt="avatar" src={source} />
        </div>
    )
}
export default PlayerAvatar;