import Nav from './Nav';
import Logo from '../icons_assets/Logo.svg';

function Footer() {
  return (
    <>
			<footer>
				{/* Logo */}
				<img src={Logo} alt="Little Lemon Logo" className="logo" />

        {/* Doormat Navigation */}
				<h1>Doormat Navigation</h1>
				<Nav navType='doormat'/>

        {/* Contact info */}
				<div className="contact">
					<h2>Contact</h2>
					<p>Address</p>
					<p>Phone Number</p>
					<p>Email</p>
				</div>

        {/* Social media links */}
				<div className="social-media">
					<h2>Social Media</h2>
					<ul>
						<li><a href="#twitter">Twitter</a></li>
						<li><a href="#instagram">Instagram</a></li>
						<li><a href="#facebook">Facebook</a></li>
					</ul>
				</div>
			</footer>
    </>
  );
}

export default Footer;
