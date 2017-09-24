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
import {
  Link
} from 'react-router-dom';
import {setLanguage} from './translation';

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
          <NavbarBrand>
            <Link to="/">CFSA Referral Program</Link>
          </NavbarBrand>
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
              <NavItem>
                <NavLink>
                  <Link to="/About">About</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/Contact">Contact</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}