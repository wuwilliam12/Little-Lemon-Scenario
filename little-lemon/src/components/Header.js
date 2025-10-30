import './Header.css';

import Nav from './Nav';
import Logo from '../icons_assets/Logo.svg';

function Header() {
  return (
    <>
      <header className='header'>
        <img src={Logo} alt="Little Lemon Logo" className="logo" /> {/* Logo */}

        <div className='headerNav'><Nav navType="header" /></div> {/* Primary Navigation */}
      </header>
    </>
  );
}

export default Header;