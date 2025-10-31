import './Header.css';

import Nav from './Nav';
import Logo from '../icons_assets/Logo.svg';

function Header() {
  return (
    <>
      <div className='header'>
        <img src={Logo} alt="Little Lemon Logo" className="logo" /> {/* Logo */}

        <div className='headerNav'><Nav navType="header" /></div> {/* Primary Navigation */}
      </div>
    </>
  );
}

export default Header;