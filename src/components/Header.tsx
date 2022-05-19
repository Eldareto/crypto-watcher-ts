import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/crypto'>Crypto</NavLink>
      <NavLink to='/watchlist'>Watchlist</NavLink>
    </nav>
  );
}
