import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Header = () => (
  <header className="pageHeader">
      <div className="navBrand">
        <img src="../images/dndgreen.png" alt="Vercel Logo" />
      </div>
      <nav className="navbar">
        <p>Home</p>
        <p>About</p>
        <p>New page</p>
      </nav>
    </header>
);

export default Header;
