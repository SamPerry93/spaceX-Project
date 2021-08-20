import React from 'react';
import { Link } from 'react-router-dom';
import x from './resources/x.png';
import './styles/nav.css';
const Nav = () => {
    return (
    
        <div className="Nav">
            <ul className="nav-list">
            <img className="logo" src={x} alt="Space x" />
                <li className="link"><Link to="/">Home</Link></li>
                <li className="link"><Link to="/launches">Launches</Link></li>
                <li className="link"><Link to="/rockets">Rockets</Link></li>
            </ul>
        </div>
      
    )
}

export default Nav
