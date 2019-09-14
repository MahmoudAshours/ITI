import React from 'react';
import PlayerAvatar from './player-avatar';
import PlayerInSights from './player-insights';

export default class TeamSquad extends React.Component {

    constructor() {
        super()
        this.state = {
            addedSquad: []
        }
    }
    async componentWillMount() {
        await this.getJSON();
    }
    onRenderSquad() {
        if (this.props.squad !== undefined) {
            return this.props.squad.map((player) => {
                return (
                    <div className="col-1-4">
                        <PlayerAvatar />
                        <PlayerInSights playerinfo={player} />
                    </div>
                )
            }
            )

        }
        return null;

    }

    onRenderAddedSquad() {
       return this.state.addedSquad.map((squad) => {
            if (this.props.id == squad.teamID)
                return (
                    <div className="col-1-4">
                        <PlayerAvatar />
                        <PlayerInSights playerinfo={squad} />
                    </div>
                )
            return null
        })
    }
    render() {

        return (

            <section className="players">
                <div class="menu">
                    {this.onRenderSquad()}
                    {this.onRenderAddedSquad()}
                </div>
            </section>
        )
    }
    async getJSON() {
        var fetching = await fetch("http://localhost:3005/teams");
        var data = await fetching.json()
        await data.map((item) => {
            if (item.addedSquad)
                this.setState({
                    addedSquad: [...this.state.addedSquad, item.addedSquad]
                })
        })
    }
}
