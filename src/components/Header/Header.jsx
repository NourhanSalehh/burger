import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.webp'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
            <img  className="logo" src={logo} alt="logo" />
          <nav className="nav">
            <Link to="/" className="nav-link">الرئيسية</Link>
            <Link to="/menu" className="nav-link">قائمة الطعام</Link>
            <Link to="/about" className="nav-link">عنا</Link>
            <Link to="/contact" className="nav-link">تواصل معنا</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
