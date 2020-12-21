import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import NavMobile from './NavMobile';

import iconNavShow from '../img/icon-nav-show.png';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  const [clickedHideNav, setClickedHideNav] = useState(false);

  const nodeRef = React.useRef(null);

  const showNavMobile = () => {
    if (!navMobile) {
      setClickedHideNav(false);
      setNavMobile(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const hideNavMobile = () => {
    if (navMobile) {
      setNavMobile(false);
      document.body.style.overflow = null;
    }
  };

  const handleClickHideNav = () => {
    setClickedHideNav(true);
    hideNavMobile();
  };

  return (
    <header>
      <p className="title">
        <Link to="/" onClick={hideNavMobile}>
          Alan Avery
        </Link>
      </p>
      <img
        className="icon-nav-show"
        src={iconNavShow}
        alt="Show navigation"
        onClick={showNavMobile}
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
          hideNavMobile={hideNavMobile}
          handleClickHideNav={handleClickHideNav}
          nodeRef={nodeRef}
        />
      </CSSTransition>
    </header>
  );
};

export default Header;
