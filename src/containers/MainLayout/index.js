import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Input, Navbar, Container, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

@inject('commentStore') @observer
export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: '#373a3c'}} dark full>
          <Container>
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Nav className="float-xs-right" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
              <NavItem className="float-md-right" style={{float: 'right'}}>
                <Button outline color="info">Search</Button>
              </NavItem>
              <NavItem className="float-md-right" style={{float: 'right'}}>
                <Input placeholder="Search..." />
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
