const Header = () => {
  return (
    <nav className="nav-container">
      <a href="#" className="nav-logo-container">
        <img
          className="nav-logo"
          src="/images/CodeSquad-Comics-logo.png"
          alt="CodeSquad Comics logo"
        />
      </a>
      <ul className="navbar" id="nav-menu">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">LOGIN</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
