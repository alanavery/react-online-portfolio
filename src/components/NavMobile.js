import { Link } from 'react-router-dom';

import iconNavHide from '../img/icon-nav-hide-black.png';

const NavMobile = (props) => {
  return (
    <nav ref={props.nodeRef} className="nav-mobile">
      <img
        className="icon-nav-hide"
        src={iconNavHide}
        alt="Hide navigation"
        onClick={props.handleHideNav}
      />
      <ul>
        <li>
          <Link to="/" onClick={props.toggleNavMobile}>
            Work
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={props.toggleNavMobile}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
