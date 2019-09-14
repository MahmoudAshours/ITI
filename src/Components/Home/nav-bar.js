import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/main.scss';
const NavBar = () => {

    return (
        <div className="nav" >
            <Link to="/" ><img src="/images/logo.png" alt="nba" /></Link>
            <div className="teams">
                <Link to='/teams'>Teams</Link>
            </div>
        </div>

    );
}
export default NavBar;