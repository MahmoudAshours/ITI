import React from 'react';
import TeamLogo from './team-logo';
import TeamBio from './team-bio';
import TeamSquad from './TeamSquad/team-squad';
import AddPlayer from './TeamSquad/add-player';
import PlayersNavBar from './players-navbar';
import '../../Styles/main.scss';
export default class TeamDetail extends React.Component {
    constructor() {
        super()
        this.state = {
            showComponent: false
        }
    }
    render() {
        var item = this.props.location.state.items;
        return (<div className="main" >
            <PlayersNavBar componentvisibility={this.returnVisibility} />
            <div className="dash" >
                <TeamLogo logo={item.logo}
                    name={item.name} />

                < div className="right" > {
                    this.state.showComponent ? < AddPlayer id={item.id} /> : null}
                    < TeamBio bio={item.description} />
                    <TeamSquad squad={item.squad} id={item.id} />
                </div>
            </div>
        </div>
        )
    }

    returnVisibility = (bool) => {
        this.setState({
            showComponent: bool
        })
    }
}