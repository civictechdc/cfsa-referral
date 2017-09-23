import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    Collapse
} from 'reactstrap';


export default class Linkbar extends Component{
  constructor(props){
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render(){
    return (
      <Container>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggleNavbar} />
          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
            <NavbarBrand href="/">Home</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      </Container>
    );
  }
}