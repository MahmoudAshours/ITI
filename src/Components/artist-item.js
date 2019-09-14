import React from 'react';
import { Link } from 'react-router-dom';
const ArtistItem = (props) => {
    let src = '/images/covers/';
    return (

        <div key={props.item.id} className="itemDiv">
            <Link to={{ pathname: `/ArtistDetail/${props.item.id}`, state: { data: props.item } }}><input className="itemButton" type="button" value={props.item.name} /></Link>
            <img className="itemImg" width="300" src={`${src}${props.item.cover}.jpg`} />
        </div>
    )
}

export default ArtistItem;