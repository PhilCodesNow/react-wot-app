import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tankopedia">Tankopedia</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
