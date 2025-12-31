import './Footer.css';

import Nav from '../Nav/Nav';
import Logo from '../../icons_assets/Logo.svg';

function Footer() {
  return (
    <>
			<div className='footer'>
				{/* Logo */}
        <div className='footer-col'>
          <img src={Logo} alt="Little Lemon Logo" className="logo" />
        </div>

        {/* Doormat Navigation */}
        <div className='footer-col'>
          <h1 className='text-lead'>Navigation</h1>
          <Nav navType='doormat' listStyle='footer-list text-card-paragraph'/>
        </div>

        {/* Contact info */}
        <div className='footer-col'>
          <div className="contact">
            <h2 className='text-lead'>Contact</h2>
            <ul className='text-card-paragraph footer-list'>
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </div>
        </div>

        {/* Social media links */}
        <div className='footer-col'>
          <div className="social-media">
            <h2 className='text-lead'>Social Media</h2>
            <ul className='text-card-paragraph footer-list'>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#facebook">Facebook</a></li>
            </ul>
          </div>
        </div>
			</div>
    </>
  );
}

export default Footer;
