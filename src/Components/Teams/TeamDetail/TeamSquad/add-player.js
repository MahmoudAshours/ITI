import React from 'react';

export default class AddPlayer extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            logo: 'avatar.png',
            number: '',
            ppg: '',
            apg: '',
            rpg: '',

        }
    }

    render() {
        return (
            <div className="all-teams">
                <input type="text" placeholder="name" onChange={this.onNameChange} />
                <input type="text" placeholder="number" onChange={this.onNumberChange} />
                <input type="text" placeholder="ppg" onChange={this.onPPGChange} />
                <input type="text" placeholder="apg" onChange={this.onAPGChange} />
                <br/><br/>
                <input type="text" placeholder="rpg" onChange={this.onRPGChange} />

                <button onClick={this.onPlayerAdded}>Add</button>

            </div>
        )
    }
    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        })

    }
    onNumberChange = (e) => {
        this.setState({
            number: e.target.value
        })

    }

    onPPGChange = (e) => {
        this.setState({
            ppg: e.target.value
        })

    }
    onAPGChange = (e) => {
        this.setState({
            apg: e.target.value
        })

    }

    onRPGChange = (e) => {
        this.setState({
            rpg: e.target.value
        })

    }
    onPlayerAdded = (e) => {
        e.preventDefault();
        let addedPlayer = {
            name: this.state.name,
            logo: this.state.logo,
            number: this.state.number,
            teamID: this.props.id,
            PPG: this.state.ppg,
            APG: this.state.apg,
            RPG: this.state.rpg
        }
        this.fetchAndPost(addedPlayer);
    }

    async fetchAndPost(addedPlayer) {

        const postMethod = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8'
                // Indicates the content 
            },
            body: JSON.stringify({ addedSquad: addedPlayer })
        }
        await fetch("http://localhost:3005/teams", postMethod);
    }
}