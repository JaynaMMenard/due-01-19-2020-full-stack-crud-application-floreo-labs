import React from "react";
import CampusGrid from "./CampusGrid.js";
import "./CampusMain.css";
import {Link} from "react-router-dom";

class CampusMain extends React.Component {
    render() {
        return (
            <div id="bg_1">
            
                <div className="campus-nav">
                  <Link to="/campusAddForm" className="campus-nav-element">Add Campus</Link>
                </div>
                <CampusGrid campuses={this.props.campuses}/>
             
            </div>
        );
    }
}

export default CampusMain;