import React from 'react';
import ArtistCovers from './artist-covers';

const ArtistDetail = (props) => {

    let detail = props.location.state.data;
    let name = detail.name;
    let cover = detail.cover;
    let bio = detail.bio;
    let albumscover = detail.albums;
    let coversrc = '/images/covers/';
    let albumsrc = '/images/albums/';

    function mapImages(albumscovers, albumsrc) {
        return albumscovers.map((cover) => { return <ArtistCovers cover={cover.cover} src={albumsrc} /> })
    }

    return (
        <div key={cover.id} className="detailDiv">
            <img className="detailImg" src={`${coversrc}${cover}.jpg`} width="250" />
            <p className="detailName">{name}</p>
            <p className="detailBio">{bio}</p>
            {mapImages(albumscover, albumsrc)}
        </div>)
}

export default ArtistDetail;