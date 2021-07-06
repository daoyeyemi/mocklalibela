import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>L a l i b e l a</NavLink>
        <NavIcon onClick={toggle}>
          <p>M e n u</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;