import footerLogo from '../assets/Logo .svg'; // Adjust filename/path to match your assets

function Footer() {
  return (
    <footer>
      {/* Parent wrapper div with the class that handles the CSS grid */}
      <div className="footer-container">
        
        {/* Column 1: Footer Logo / Image */}
        <div>
          <img src={footerLogo} alt="Little Lemon" />
        </div>

        {/* Column 2: Doormat Navigation */}
        <div>
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div>
          <h4>Contact</h4>
          <ul>
            <li>123 Lemon Way, Chicago, IL</li>
            <li>+1 (555) 123-4567</li>
            <li>info@littlelemon.com</li>
          </ul>
        </div>

        {/* Column 4: Social Media Links */}
        <div>
          <h4>Social Media Links</h4>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;