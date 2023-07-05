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
          <a href="/home" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
    
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </li>
        
      </ul>
    </nav>
    </div>
  )
}

export default Navbar