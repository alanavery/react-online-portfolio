import { Link } from 'react-router-dom';

import iconNavExpand from '../img/icon-nav-expand.png';

function Header() {
  return (
    <header>
      <p className="title">
        <Link to="/">Alan Avery</Link>
      </p>
      <img className="icon-nav-expand" src={iconNavExpand} alt="" />
      <nav>
        <ul>
          <li>
            <Link to="/">Work</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
