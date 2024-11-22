import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Badge } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { useNavigationCtx } from '../../../providers/NavigationProvider';
import { CartIcon } from './CartIcon';
import { NavItem } from '../../../models/NavItem';
import { useAppSelector } from '../../../hooks';

const Header: React.FC = () => {
  const { mainNavItems, isLoggedIn, setIsLoggedIn } = useNavigationCtx();
  const { cart } = useAppSelector((state) => state);

  const logout = () => {
    setIsLoggedIn(false);    
    localStorage.removeItem("token");
  } 

  return (
    <header>
      <Navbar className="border-b-1 mb-3">
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {mainNavItems.map((item: NavItem, index: number) => (
            <NavbarItem key={index}>
              <Link color="foreground" to={item.path} >
                {item.label} 
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link to="/cart">
              <Badge color="danger" content={cart.items?.length} shape="circle">
                <CartIcon size={30} />
              </Badge>
            </Link>
          </NavbarItem>
          <NavbarItem className="">
            { !isLoggedIn ? 
              <Link to="/auth">
                Login
              </Link>
              :
              <Link to="#" onClick={logout}>
                Logout
              </Link>
            } 
          </NavbarItem>
          { !isLoggedIn &&
          <NavbarItem>
            <Button as={Link} color="primary" to="/auth/signup" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
          } 
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default Header;
