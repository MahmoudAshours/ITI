import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/main.scss';
export default class TeamsNavBar extends React.Component {
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
                    <img src='/images/logo.png' alt="logo"/>
                </Link>
                <div className="teams">

                    <Link to='/teams'>
                        <a className="teams">Teams</a>
                    </Link>
                </div>
                <div onClick={this._onButtonClick} className="teams"> <Link> Add teams</Link> </div>

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