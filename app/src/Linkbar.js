import React, {Component} from 'react';
import {
    Container,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    Collapse
} from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {setLanguage} from 'translation';

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
      <Container fluid={true}>
        <Navbar color="faded" light toggleable>
          <LinkContainer to="/">
            <NavbarBrand>CFSA Referral Program</NavbarBrand>
          </LinkContainer>
          <NavbarToggler right onClick={this.toggleNavbar} />
          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" >
              <NavItem onClick={() => setLanguage('en')}>
                <NavLink>
                  English
                </NavLink>
              </NavItem>
              <NavItem onClick={() => setLanguage('es')}>
                <NavLink>
                  Spanish
                </NavLink>
              </NavItem>
                <LinkContainer to="/about">
                  <NavLink>About</NavLink>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <NavLink>Contact</NavLink>
                </LinkContainer>
                </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}