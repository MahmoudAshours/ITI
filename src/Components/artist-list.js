import React from 'react';
import ArtistItem from './artist-item';

export default class ArtistList extends React.Component {

    constructor() {
        super();
        this.state = {
            artists: [],
            previewedArtists: [],
            baseUrl: 'http://localhost:3000/artists'
        }
    }
    componentWillMount() {
        fetch(this.state.baseUrl)
            .then((respnonse) => respnonse.json()).then((data) => this.setState({
                artists: data
            }));

    }
    onRenderArtists() {
        return (
            <div className="mainDiv">
                
                <font className="musicdb">Music DB</font>
                <img src="/images/cover.png"></img>
                <center><h2>Browse the artists</h2></center>
                {this.state.artists.map((item, index) => { return <ArtistItem item={item} index={index} /> })}
            </div>
        )
    }
    render() {
        return (
            <div>{this.onRenderArtists()}</div>
        );
    }
}