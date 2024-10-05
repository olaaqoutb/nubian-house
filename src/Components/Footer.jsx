import './Footer.css'; // Make sure to have the CSS styles in a separate file
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import img1 from "../assets/one.jpg"
import img2 from "../assets/three.jpg"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section logo-description">
          <div className="logo">
            <h2>Nubian House</h2>
          </div>
          <p>
            comfortanble like your home
          </p>
        
        </div>

        {/* galary */}
       
        <div className="footer-section gallery">
          <h3 className='our-galary'>Our Gallery</h3>
          <div className="gallery-images">
            <img src={img1} alt="Gallery Image 1" />
            <img src={img2} alt="Gallery Image 2" />
            <img src={img1} alt="Gallery Image 3" />
            <img src={img2} alt="Gallery Image 4" />
            <img src={img1} alt="Gallery Image 3" />
            <img src={img2} alt="Gallery Image 4" />
          </div>
        </div>
        {/* Information Links */}
        <div className="footer-section info-links">
          <h3>Contact Us</h3>
          <ul>
            <li className='contact'><FaPhone /> <p>+20 11 00291119</p></li>
            <li className='contact'><FaEnvelope /> <p>nubianhouse@gmail.com</p></li>
          </ul>
        </div>

        {/* usful links */}
        <div className="footer-section useful-links">
          <h3>Useful Links</h3>
          <ul className="useful-links2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            </ul>
            <ul className="useful-links2">
            <li><a href="#">Activities</a></li>
            <li><a href="#">Reservation</a></li>
            </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
       
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <p>Copyright © 2024 Nubian House. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
