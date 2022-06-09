import { FC } from 'react';
import { NavLink } from 'react-router-dom';

/* Local */
import { navLinks } from './Header.type';

const Header: FC = () => {
  return (
    <div className='main-header'>
      <div className='main-logo'>
        <p>Some Logo</p>
      </div>
      <nav className='header-nav'>
        <NavLink
          to={navLinks.HOME}>Home</NavLink>
        <NavLink
          to={navLinks.CRYPTO}>Crypto</NavLink>
        <NavLink
          to={navLinks.WATCHLIST} >Watchlist</NavLink>
      </nav>
    </div>
  );
};

export default Header;
