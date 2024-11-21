import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <Navbar className="border-b-1 mb-3">
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" to="/home">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link to="/about" aria-current="page">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" to="/products">
              Products
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default Header;
