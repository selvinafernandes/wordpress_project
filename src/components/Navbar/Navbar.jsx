import logo from './../../assets/logo.svg';
import './Navbar.scss';
import { Link } from "react-router-dom";
import Button from './../Button/Button';
import data from './../../data/menu.json';
import Menu from './../Menu/Menu';
import React, { useState } from 'react';

const Navbar = () =>  {
  const [toggle, setToggle] = useState(false);

  function handleStatusChange(toggle) {
    setToggle(toggle => !toggle);
  }
  return (
    <>
      <div class="header-outer">
        <header className="header">
          <div className="row header-row">
            <div className="col-md-3">
              <Link to="/" className="logo">
                <img src={logo} />
              </Link>
            </div>
            <div className="col-md-9">
              <div className="navbar-mobile">
                <a onClick={handleStatusChange}>
                  <span className="navbar-title">menu</span>
                  <i className="fa fa-bars"></i>
                </a>
              </div>
              <nav className="navbar-desktop">
              {data.length > 0 &&
                <Menu data={data} />
              }
                <ul className="navbar-action">
                  <li>
                    <Button route="/Demo" className="btn btn-demo" title="Request for demo"/>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <div className={`navbar-mobile-slideout ${toggle ? "open" : ""}`}>
            <li>
              <Link to="/">Product</Link>
            </li>

        </div>
      </div>
    </>
  )
}

export default Navbar;