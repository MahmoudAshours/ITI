import React from 'react';
import TeamsNavBar from './teams-navbar';
import SearchBar from './search-bar';
import TeamList from './team-list';
import AddTeam from './addTeam';

export default class TeamsMain extends React.Component {

    constructor() {
        super()
        this.state = {
            teamUrl: 'http://localhost:3005/teams',
            teamsData: [],
            filteredTeams: [],
            showComponent: false
        }
    }

    componentWillMount() {
        this.getJson();
    }

    render() {

        return (
            <div>
                <TeamsNavBar componentvisibility={this.returnVisibility} />
                <SearchBar filterate={this.filterTeams} />
                {this.state.showComponent ? <AddTeam /> : null}
                <TeamList teamsData={this.state.filteredTeams} />

            </div>
        )
    }
    filterTeams = (keyword) => {
        let filtered = this.state.teamsData.filter((index) => {
            if (!index.addedSquad)
                return index.name.toUpperCase().indexOf(keyword.toUpperCase()) > -1 || index.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            return null;
        });
        this.setState({ filteredTeams: filtered });
    }

    returnVisibility = (bool) => {
        this.setState({
            showComponent: bool
        })
    }

    async getJson() {
        var teamresponse = await fetch(this.state.teamUrl);
        var teamData = await teamresponse.json();
        this.setState({
            teamsData: teamData,
            filteredTeams: teamData
        });
    }
}