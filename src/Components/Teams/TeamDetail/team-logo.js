import React from 'react';

const TeamLogo = (props) => {

    const source = '/images/teams/';
    return (

        <section className="head">  
            <div className="left">
                <div className="logo">
                   <img src={`${source}${props.logo}`}/>
                </div>
                <div className="text"> <h1 className="name">{props.name}</h1></div>

            </div>
        </section>
    )
}
export default TeamLogo;