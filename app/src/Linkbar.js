import React from 'react';
import {
    Container,
    Row,
    Col,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand
} from 'reactstrap';


const Linkbar=() =>{
  return (
  <Container>
    <Navbar toggleable>
      <NavbarToggler right onClick={this.toggle} />
      <NavbarBrand href="/">Home</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/About">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </Navbar>

  </Container>
  );
}

export default Linkbar;