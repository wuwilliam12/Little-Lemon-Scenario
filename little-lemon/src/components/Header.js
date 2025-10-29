import Nav from './Nav';
import Logo from '../icons_assets/Logo.svg';

function Header() {
  return (
    <>
      <header>
        <img src={Logo} alt="Little Lemon Logo" className="logo" /> {/* Logo */}

        <Nav navType="primary" /> {/* Primary Navigation */}
      </header>
    </>
  );
}

export default Header;