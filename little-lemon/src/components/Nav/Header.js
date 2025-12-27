import './Header.css';

import Nav from './Nav';
import Logo from '../../icons_assets/Logo.svg';

function Header() {
  return (
    <>
      <div className='header'>
        {/* Logo */}
        <img src={Logo} alt="Little Lemon Logo" className="logo" />

        {/* Primary Navigation */}
        <div className='headerNav'><Nav navType="header" /></div>
      </div>
    </>
  );
}

export default Header;