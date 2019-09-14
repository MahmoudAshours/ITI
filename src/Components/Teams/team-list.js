import React from 'react';
import TeamItem from './team-item';

const TeamList = (props) => {
    var listOfTeams = props.teamsData;
    function renderTeams() {
        return listOfTeams.map((teamItem) => {
            if (!teamItem.addedSquad) {
                return (<TeamItem item={teamItem} />)
            }
            return null;
        }
        )
    }

    return (
        <div class="menu">
            {renderTeams()}
        </div>
    )
}
export default TeamList;