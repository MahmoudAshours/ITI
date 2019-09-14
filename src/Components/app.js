import React from 'react';
import NavBar from './Home/nav-bar';
import SliderPage from './Home/slider';
import Subscribe from './Home/subscribe';
import BLocks from './Home/blocks';
import Poll from './Home/poll';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeURL: 'http://localhost:3005/home',
            teamUrl: 'http://localhost:3005/teams',
            sliderData: [],
            blockData: [],
            pollData: [],
            teamsData: []
        }
    }
    componentWillMount() {
        this.getJson();
    }
    render() {
        return (
            <div className="home">
                <NavBar />
                <SliderPage sliderData={this.state.sliderData} />
                <Subscribe />

                <BLocks blockData={this.state.blockData} />
                <div className="content" >
                <Poll pollData={this.state.pollData} teamData={this.state.teamsData} teamUrl={this.state.teamUrl} />
            </div>
            </div>
        );
    }
    async getJson() {
        var homeresponse = await fetch(this.state.homeURL);
        var teamresponse = await fetch(this.state.teamUrl);
        var data = await homeresponse.json();
        var teamData = await teamresponse.json();
        this.setState({
            blockData: data.blocks,
            sliderData: data.slider,
            pollData: data.poll,
            teamsData: teamData,
        });
    }
}