import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Badge } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { useNavigationCtx } from '../../../providers/NavigationProvider';
import { CartIcon } from './CartIcon';
import { useCart } from '../../../providers/CartProvider';
import { NavItem } from '../../../models/NavItem';

const Header: React.FC = () => {
  const { mainNavItems, isLoggedIn, setIsLoggedIn } = useNavigationCtx();
  const { cart } = useCart();

  const toggleLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
    // TODO: use effect
    if(!isLoggedIn){
      localStorage.setItem("token", "12345");
    } else {
      localStorage.removeItem("token");
    } 
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
