import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import profileData from "../../pages/Profile/profileData.json";

const Nav = () => (
  <div className="container-fluid">
    <div className="navbar-logo">
      <img src="/img/cornerLogo.png" id="navbar-logo" className="img img-responsive" />
    </div>

    <div className="navbar-menu">


      <ul className="navbar-list">
        <li className="navTransition-hover"><Link to="/search/daily"><i className="far fa-calendar-minus navMenuItem navi"></i>
          <p id="navTransition-hover-content" className="navp">Today</p></Link>
        </li>
        <li className="navTransition-hover"><Link to="/search/weekly"><i className="far fa-calendar-alt navMenuItem navi"></i>
          <p id="navTransition-hover-content" className="navp">This Week</p></Link>
        </li>
        <li className="navTransition-hover"><Link to="/search/custom"><i className="fas fa-users navMenuItem navi"></i>
          <p id="navTransition-hover-content" className="navp">Search</p></Link>
        </li>
        <li className="navTransition-hover"><Link to="/profile"><i className="fas fa-user navMenuItem navi"></i>
          <p id="navTransition-hover-content" className="navp">My Profile</p></Link>
        </li>
        <li className="navTransition-hover"><Link to="/settings"><i className="fas fa-cogs navMenuItem navi"></i>
          <p id="navTransition-hover-content" className="navp">Settings</p></Link>
        </li>
        <li className="navTransition-hover"><Link to="/faq"><i className="fas fa-question navMenuItem navi"></i>
          <p id="navTransition-hover-content" className="navp">FAQ</p></Link>
        </li>
        <li className="navTransition-hover"><Link to="/contact"><i className="far fa-comments navMenuItem navi"></i>
          <p id="navTransition-hover-content" className="navp">Contact Us</p></Link>
        </li>
        <li className="navTransition-hover"><Link to="/about"><i className="fas fa-user-secret navMenuItem navi"></i>
          <p id="navTransition-hover-content" className="navp">About Us</p></Link>
        </li>
        <li className="navTransition-hover"><Link to="/"><i className="fas fa-lock navMenuItem navi"></i>
          <p id="navTransition-hover-content" className="navp">Log Out</p></Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
