import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/logo.webp'
import facebook from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img className="footer-logo" src={logo} alt=" logo" />
          </div>
          <div className="footer-links">
            <Link to="/" className="footer-link">الرئيسة</Link>
            <Link to="/menu" className="footer-link">قائمة الطعام</Link>
            <Link to="/about" className="footer-link">عنا</Link>
            <Link to="/contact" className="footer-link">تواصل معنا</Link>
          </div>
          <div className="footer-contact">
            <h4>للتواصل معنا</h4>
            <p>Phone: +20 100 000 0000</p>
            <p>Email: wahmy@burger.com</p>
          </div>
          <div className="social-media">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><img  className="social-icons" src={facebook} alt="Facebook icon" /></a>
              <a href="#"><img  className="social-icons" src={insta} alt="Instagram icon" /></a>
            </div>
          </div>
        </div>
          <p className="copyright">&copy; {new Date().getFullYear()} وهمي برجر - كل الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

export default Footer;
