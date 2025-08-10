import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top" className="w-100 px-4">
      <BootstrapNavbar.Brand href="#home">Diploy</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link href="https://calendly.com/yinglonglin/diploy-product-demo">Book a Demo</Nav.Link>
        <Nav.Link href="mailto:sales@diploy.io">Contact Us</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;