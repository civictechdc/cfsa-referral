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
      collapsed: false
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render(){
    return (
      <Container fluid={true}>
        <Navbar color="faded" light toggleable>
          <NavbarBrand href="/">CFSA Referral Program</NavbarBrand>
          <NavbarToggler right onClick={this.toggleNavbar} />
          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" >
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