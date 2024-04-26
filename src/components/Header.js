import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';

function Header() {
  return (
    <Navbar expand="lg" className="header" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#product">Shop</Nav.Link>
            <Nav.Link href="#offer">Offers</Nav.Link>
            <Nav.Link href="#contact">GetItNow</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <div className='support ms-auto d-flex justify-content-center'>
            <div>
            
            <p><a href="tel:+917057399327" style={{textDecoration:"none",fontSize:"1rem", textAlign:"center",color:"#fff"}}>Call Us</a></p>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;