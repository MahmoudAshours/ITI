import React from 'react';
import { Link } from 'react-router-dom';
const TeamItem = (props) => {
    const source = '/images/teams/';
    var item = props.item;
    return (
        <div className="col-1-4" id={item.id}>
            <Link to={{ pathname: `/teams/${item.id}`, state: { items: item } }} ><img alt="team-item" src={`${source}${item.logo}`} /></Link>
        </div>
    )
}
export default TeamItem;