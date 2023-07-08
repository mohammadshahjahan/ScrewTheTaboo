import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiTireIronCross } from 'react-icons/gi';
import stb from '../constants/stb.png';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={stb} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#home">Rewards</a></li>
        <li className="p__opensans"><a href="#notes">Notes</a></li>
        <li className="p__opensans"><a href="#calendar">Calendar</a></li>
        <li className="p__opensans"><a href="#faq">FAQs</a></li>
        <li className="p__opensans"><a href="#contact">About Us</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In</a>
        <div />
        <a href="/" className="p__opensans">Sign Up</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <GiTireIronCross fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Notes</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Calendar</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>FAQs</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>About Us</a></li>
            </ul>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;