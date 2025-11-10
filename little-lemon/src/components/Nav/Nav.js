import './Nav.css';

function Nav( {navType = "primary", listStyle=""} ) {
  return (
    <>
      <div className={`nav nav-${navType} text-card-paragraph`}>
        <ul className={listStyle}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order-online">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
    </>
  );
}

export default Nav;