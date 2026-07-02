import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header navbar navbar-expand-lg navbar-light shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <Link className="brand" to="/">
          Aurix
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Features
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Gold Rate
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="#">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>

            <li className="nav-item mt-2 mt-lg-0">
              <Link to="/login" className="header-cta py-1 px-3 rounded-2">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
