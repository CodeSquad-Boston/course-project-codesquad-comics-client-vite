import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-container-group">
        <h3>VISIT US</h3>
        <span>
          CodeSquad Comics
          <br />
          123 Dorchester Avenue
          <br />
          Boston, MA 02124
        </span>
      </div>
      <div className="footer-container-group">
        <h3>LINKS</h3>
        <ul className="navbar" id="nav-menu">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </div>
      <div className="footer-container-group">
        <h3>FOLLOW US</h3>
        <div className="footer-container-font-awesome">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="footer-container-group">
        <h3>A PRODUCT OF</h3>
        <a
          href="http://codesquad.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="footer-logo"
            src="/images/CodeSquad-logo.jpg"
            alt="CodeSquad logo"
            loading="lazy"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
