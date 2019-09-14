import React from 'react';

export default class AddTeam extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            logo: 'hawks.png',
            count: '',
            bio: '',
        }
    }
    render() {
        return (
            <div className="all-teams">
                <input type="text" placeholder="ID" onChange={this.onChangeID} />
                <input type="text" placeholder="Name" onChange={this.onchangeName} />
                <input type="text" placeholder="Count" onChange={this.onchangeCount} />
                <textarea placeholder="Enter the team description" cols="61" rows="4" onChange={this.onchangeDesc}></textarea>
                <button onClick={this.onTeamAdded}>Add</button>

            </div>
        )
    }

    onChangeID = (e) => {
        this.setState({
            id: e.target.value
        })

    }
    onchangeName = (e) => {
        this.setState({
            name: e.target.value
        })

    }

    onchangeCount = (e) => {
        this.setState({
            count: e.target.value
        })

    }
    onchangeDesc = (e) => {
        this.setState({
            bio: e.target.value
        })

    }
    onTeamAdded = (e) => {
        e.preventDefault();
        let addedTeam = {
            id: this.state.id,
            name: this.state.name,
            logo: this.state.logo,
            count: this.state.count,
            description: this.state.bio,
        }
        this.fetchAndPost(addedTeam);
    }

    async fetchAndPost(addedTeam) {
        const putMethod = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            body: JSON.stringify(addedTeam)
        }

        await fetch(`http://localhost:3005/teams`, putMethod).catch((err) => { console.log(err) });

    }

}
