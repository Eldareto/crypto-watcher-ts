import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

const Header: FC = (): ReactElement => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/crypto'>Crypto</NavLink>
      <NavLink to='/watchlist'>Watchlist</NavLink>
    </nav>
  );
};

export default Header;
