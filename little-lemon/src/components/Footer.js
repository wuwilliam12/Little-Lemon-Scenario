import Nav from './Nav';

function Footer() {
  return (
    <>
			<footer className="App-footer">
				{/* Logo */}

				<Nav navType='doormat'/> {/* Doormat Navigation */}

				<div className="contact">
					<h3>Contact</h3>
					<p>Address</p>
					<p>Phone Number</p>
					<p>Email</p>
				</div>

				<div className="social-media">
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
