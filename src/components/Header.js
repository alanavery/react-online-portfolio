import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import NavMobile from './NavMobile';

import iconNavShow from '../img/icon-nav-show.png';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  const [clickedHideNav, setClickedHideNav] = useState(false);

  const nodeRef = React.useRef(null);

  const toggleNavMobile = () => {
    if (!navMobile) {
      setClickedHideNav(false);
      setNavMobile(true);
      document.body.style.overflow = 'hidden';
    } else {
      setNavMobile(false);
      document.body.style.overflow = null;
    }
  };

  const handleHideNav = () => {
    setClickedHideNav(true);
    toggleNavMobile();
  };

  return (
    <header>
      <p className="title">
        <Link to="/" onClick={toggleNavMobile}>
          Alan Avery
        </Link>
      </p>
      <img
        className="icon-nav-show"
        src={iconNavShow}
        alt="Show navigation"
        onClick={toggleNavMobile}
      />
      <nav className="nav-desktop">
        <ul>
          <li>
            <Link to="/">Work</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <CSSTransition
        in={navMobile}
        timeout={300}
        classNames="fade"
        unmountOnExit
        exit={clickedHideNav ? true : false}
        nodeRef={nodeRef}
      >
        <NavMobile
          toggleNavMobile={toggleNavMobile}
          handleHideNav={handleHideNav}
          nodeRef={nodeRef}
        />
      </CSSTransition>
    </header>
  );
};

export default Header;
