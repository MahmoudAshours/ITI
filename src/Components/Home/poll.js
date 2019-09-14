import React from 'react';
import '../Styles/main.scss';

export default class Poll extends React.Component {
    constructor() {
        super();
        this.state = {
            source: '/images/teams/',
            bool: 'false'
        }

    }
    componentWillUpdate(e) {
        this.returnCountArray(e.teamData)
    }
    render() {
        const teamData = this.props.teamData;
        return (
            this.onPollRender(teamData)
        )
    }

    returnCountArray(teamsData) {
        var countArray = [];
        teamsData.forEach((teamItem) => { if (teamItem.poll === "true") countArray.push(teamItem) })
        return countArray.sort(function (a, b) { return b.count - a.count });//In descending order
    }

    onPollRender(teamsData) {
        var mappingArray = this.returnCountArray(teamsData);
        return mappingArray.map((teamItem) => {
            return (


                    <div className="card-new"> 
                    <img alt="logo" src={`${this.state.source}${teamItem.logo}`} onClick={() => this.handlePoll(teamItem)} />
                    <div className="text"> <h1>{teamItem.count}</h1></div>
                    </div>
               
            )
        })
    }

    async handlePoll(teamItem) {
        const countData = {
            count: ++teamItem.count,
        }
        const putMethod = {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            body: JSON.stringify(countData)
        }
        await fetch(`http://localhost:3005/teams/${teamItem.id}`, putMethod);
        this.setState({
            bool: "true"
        })
    }
}