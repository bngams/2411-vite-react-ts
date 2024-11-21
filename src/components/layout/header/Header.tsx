import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { useNavigationCtx } from '../../../providers/NavigationProvider';

const Header: React.FC = () => {
  const { mainNavItems, isLoggedIn, setIsLoggedIn } = useNavigationCtx();

  const toggleLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  } 

  return (
    <header>
      <Navbar className="border-b-1 mb-3">
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {mainNavItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link color="foreground" to={item.path} >
                {item.label} 
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to="#" onClick={toggleLoggedIn}>
              { isLoggedIn ? 'Logout' : 'Login' } 
            </Link>
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
