import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/assets/Patliputra_logistics.png" alt="Logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a href="/home" className="nav-link">
            Home
          </a> */}
          <a href="/home" className="nav-link">
              <i className="fas fa-caret-left"></i>
              Home
              <i className="fas fa-caret-right"></i>
            </a>
        </li>
        <li className="nav-item">
        <a href="/about" className="nav-link">
              <i className="fas fa-caret-left"></i>
              About
              <i className="fas fa-caret-right"></i>
            </a>
        </li>
    
        <li className="nav-item">
        <a href="/Services" className="nav-link">
              <i className="fas fa-caret-left"></i>
              Services
              <i className="fas fa-caret-right"></i>
            </a>
        </li>
        <li className="nav-item">
        <a href="/contact" className="nav-link">
              <i className="fas fa-caret-left"></i>
              Contact
              <i className="fas fa-caret-right"></i>
            </a>
        </li>
        
      </ul>
    </nav>
    </div>
  )
}

export default Navbar