import React from 'react';
import { Link } from 'react-router-dom';

export default class PlayersNavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            changed: true
        }
    }
    render() {
        return (
            <div className="nav">
                <Link to="/" >
                    <img src='/images/logo.png' />
                </Link>
                <div className="teams">

                    <Link to='/teams'>
                      Teams
                    </Link>
                </div>
                <input id="submit"type="button" value="Add player" onClick={this._onButtonClick} className="teams" />

            </div>
        );
    }

    _onButtonClick = () => {

        if (this.state.changed) {
            return this.props.componentvisibility(true),
                this.setState({
                    changed: false
                })
        } else {
            return this.props.componentvisibility(false),
                this.setState({
                    changed: true
                })
        };
    }
}