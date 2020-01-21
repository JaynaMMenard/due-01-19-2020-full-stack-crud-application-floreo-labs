import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header>
                <nav>
            <div className="navbar">
                <div  className="header">
               <h2 id="Home"><Link  to="/">Campus Manager</Link></h2>
                <ul>
               <li> <Link className="nav-element" to="/campuses">Campuses</Link></li>
               <li> <Link className="nav-element" to="/students">Students</Link></li>
                </ul>
                </div>
            </div>
            </nav>
            </header>
        )
    }
}

export default Header;