import React from "react";
import Logo from "../assets/initial-logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './header.css';fi

const Header = () => {
  return (
    <div>
      <header className="hide-when-mobile">
        <img className="logo" src={Logo} alt="logo" />
        <ul className="flex">
          <li className="main-list">
            <div className="main-Link">Advertise with us</div>

            <ul className="sub-ul">
              <li>
                <Link to="/product">product</Link>
              </li>
              <li>
                <Link to="/company">company</Link>
              </li>
              <li>
                <Link to="/service">service</Link>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <div className="main-Link"> services</div>
            <ul className="sub-ul">
              <li>
                <Link to="/tec">tec</Link>
              </li>
              <li>
                <Link to="/online">online</Link>
              </li>
              <li className="mini-projects">
                <NavLink to="#">others&nbsp; + </NavLink>
                <ul className="sub-sub-ul">
                  <li>
                    <Link to="#">project 1</Link>
                  </li>
                  <li>
                    <Link to="#">project 2</Link>
                  </li>
                  <li>
                    <Link to="#">project 3</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-Link" to="/price">
              price 🔥
            </NavLink>
          </li>
        </ul>
      </header>
      <header className="show-when-mobile">
        <img className="logo" src={Logo} alt="logo" />
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              <Link to="/price">price 🔥</Link>
            </label>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              services <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <Link to="/tec">tecnical</Link>
              </li>
              <li>
                <Link to="/online">online</Link>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  More <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <Link to="">soon 1</Link>
                  </li>
                  <li>
                    <Link to="">soon 2</Link>
                  </li>
                  <li>
                    <Link href="">soon 3</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
          <label htmlFor="js">
            Advertise with us <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <Link to="/product">product</Link>
              </li>
              <li>
                <Link to="/company">company</Link>
              </li>
              <li>
                <Link to="/service">service</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
