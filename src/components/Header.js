import React, { useState } from 'react';
import {Link} from 'react-router-dom';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">HOME</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={Link} to="/products">Products</NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={Link} to="/profile"></NavLink>
            </NavItem>
           </Nav>
           <Nav className="ml-auto" navbar>
            

            



            <NavItem>
              <NavLink tag={Link} to="/Signup/"></NavLink>
            </NavItem>
           </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;





