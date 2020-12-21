import { Link } from 'react-router-dom';

import iconNavHide from '../img/icon-nav-hide-black.png';

const NavMobile = (props) => {
  return (
    <nav ref={props.nodeRef} className="nav-mobile">
      <img
        className="icon-nav-hide"
        src={iconNavHide}
        alt="Hide navigation"
        onClick={props.handleClickHideNav}
      />
      <ul>
        <li>
          <Link to="/" onClick={props.hideNavMobile}>
            Work
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={props.hideNavMobile}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
