import React, { Component } from 'react';
export default class SearchBar extends Component {

    constructor() {
        super();
        this.state = {
            key: '',
        }
    }

 
    onInputChanged = (event) => {
        this.setState({ key: event.target.value });
        this.props.filterate(event.target.value);
    }

    render() {
        return (
            <div className="all-teams">
                <div className="search">
                    <input type="text"
                        onChange={this.onInputChanged} />
                    <hr />
                </div>
            </div>
        )
    }
}