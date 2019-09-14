import React from 'react';

const PlayerInSights = (props) => {
    var player = props.playerinfo;
    
    return (
        <div key={props.playerinfo.number} className="col-1-4" >
            <h1> {props.playerinfo.name} </h1>
            <ul>
                <li>number : {player.number}</li>
                <li>PPG : {player.PPG}</li>
                <li>apg : {player.APG}</li>
                <li>rpg : {player.RPG}</li>
            </ul>

        </div>
    )
}
export default PlayerInSights;