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
import { withRouter } from 'react-router-dom';
import {setLanguage} from './translation';

class Linkbar extends Component{
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

  navigate = destination => {
    return {
      onClick: () => this.props.history.push(destination),
      className: this.props.location.pathname === destination ? "current" : ""
    }
  };

  render(){
    return (
      <Container fluid={true}>
        <Navbar color="faded" light toggleable>
          <NavbarBrand {...this.navigate("/")} >
            CFSA Referral Program
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
                <NavLink {...this.navigate("/About")}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink {...this.navigate("/Contact")}>
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default withRouter(Linkbar)
