import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__ul">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tankopedia">Tankopedia</Link></li>
                    <li><Link to="/players">Player Lookup</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
