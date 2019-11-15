import React from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';


function Header() {
  return (
    <Navbar className='white-background' sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://www.wealthsimple.com/assets/magazine/images/header/logo-010d4e6641c28141d4c88b71646b377a.svg"
            width="180"
            height="50"
            className="large-header-logo"
            alt="Wealthsimple"
          />
          <img
            src="https://www.wealthsimple.com/assets/magazine/images/header/logo_small-6dccf727ddc595c19f73cecef3069936.svg"
            width="150"
            height="30"
            className="small-header-logo"
            alt="Wealthsimple"
          />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Navbar.Text>
            <Nav.Link href="/">Magazine</Nav.Link>
          </Navbar.Text>
            <Nav.Link href="/"><Button className="custom mt-1">Start investing</Button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
