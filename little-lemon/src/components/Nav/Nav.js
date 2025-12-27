import './Nav.css';
import { NavLink } from "react-router-dom";

function Nav( {navType = "primary", listStyle=""} ) {
  return (
    <>
      <div className={`nav nav-${navType} text-card-paragraph`}>
        <ul className={listStyle}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/booking">Reservations</NavLink></li>
          <li><NavLink to="/order">Order Online</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </div>
    </>
  );
}

export default Nav;