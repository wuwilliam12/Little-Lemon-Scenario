import Nav from './Nav';

function Header() {
  return (
    <>
      <header className="app-header">
        <img src="logo.png" alt="Little Lemon Logo" className="logo" /> {/* Logo */}

        <Nav navType="primary" /> {/* Primary Navigation */}
      </header>
    </>
  );
}

export default Header;