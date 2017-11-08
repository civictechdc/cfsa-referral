import React, {Component} from 'react';
import {
    Container,
    Navbar,
    NavbarToggler,
    Nav,
    NavLink,
    NavbarBrand,
    Collapse,
    NavDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {setLanguage} from 'translation';
import translation from 'translation';

export default class Linkbar extends Component{
  constructor(props){
    super(props);

    this.state = {
      menuOpen: false,
      languageOpen: false
    };
  }

  toggleOpen = element => () => {
    element += 'Open'
    this.setState({[element]: !this.state[element]});
  }

  render(){
    let {history} = this.props;
    return (
      <Container fluid={true}>
        <Navbar color="faded" light toggleable>
          <LinkContainer exact to="/">
            <NavbarBrand>CFSA Referral Program</NavbarBrand>
          </LinkContainer>
          <NavbarToggler right onClick={this.toggleOpen('menu')} />
          <Collapse className="navbar-toggleable-md" isOpen={this.state.menuOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavDropdown isOpen={this.state.languageOpen} toggle={this.toggleOpen('language')} >
                <DropdownToggle nav caret>
                  {translation.t('LANGUAGE')}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => setLanguage('en', history)}>
                    English
                  </DropdownItem>
                  <DropdownItem onClick={() => setLanguage('es', history)}>
                    Español
                  </DropdownItem>
                </DropdownMenu>
              </NavDropdown>
              <LinkContainer to="/about">
                <NavLink>{translation.t('ABOUT')}</NavLink>
              </LinkContainer>
              <LinkContainer to="/contact">
                <NavLink>{translation.t('CONTACT')}</NavLink>
              </LinkContainer>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}
