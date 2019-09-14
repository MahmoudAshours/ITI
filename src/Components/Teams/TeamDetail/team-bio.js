import React from 'react';

const TeamBio = (props) => {
    return (
        <section className="disc">
            
        <h1 className="sub">Team's description</h1>
            <p>
                {props.bio}
            </p>
    </section>
    )
}
export default TeamBio;