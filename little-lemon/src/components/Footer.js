import Nav from './Nav';
import Logo from '../icons_assets/Logo.svg';

function Footer() {
  return (
    <>
			<footer>
				{/* Logo */}
				<img src={Logo} alt="Little Lemon Logo" className="logo" />

				<h3>Doormat Navigation</h3>
				<Nav navType='doormat'/> {/* Doormat Navigation */}

				<div className="contact">
					<h3>Contact</h3>
					<p>Address</p>
					<p>Phone Number</p>
					<p>Email</p>
				</div>

				<div className="social-media">
					<h3>Social Media</h3>
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
