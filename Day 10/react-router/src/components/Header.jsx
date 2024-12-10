
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">My Website</h1>
        <nav>
          <ul className="header-nav">
            <li><Link to="/" className="header-link">Home</Link></li>
            <li><Link to="/about" className="header-link">About</Link></li>
            <li><Link to="/services" className="header-link">Services</Link></li>
            <li><Link to="/contact"  className="header-link">Contact</Link></li>
            <li><Link to="/login"  className="header-link">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
