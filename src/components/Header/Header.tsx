import { FC } from 'react';
import { NavLink } from 'react-router-dom';

/* Local */
import { navLinks } from './Header.type';

const Header: FC = () => {
  return (
    <nav>
      <NavLink to={navLinks.HOME}>Home</NavLink>
      <NavLink to={navLinks.CRYPTO}>Crypto</NavLink>
      <NavLink to={navLinks.WATCHLIST}>Watchlist</NavLink>
    </nav>
  );
};

export default Header;
