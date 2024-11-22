import { lazy } from "react";
import { NavItems } from "./models/NavItem";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

export const mainNavItems: NavItems = [
    {
        path: '/home',
        component: Home,
        label: 'Home',
        permissions: []
    },
    {
        path: '/about',
        component: About,
        label: 'About',
        permissions: []
    },
    {
        path: '/products',
        component: lazy(() => import('./pages/products/Products')),
        label: 'Products',
        permissions: []
    },
    {
        path: '/orders',
        component: lazy(() => import('./pages/orders/Orders')),
        label: 'Orders',
        permissions: ['user']
    },
];

export const staticNavItems: NavItems = [
    {
        path: '/product/:id',
        component: lazy(() => import('./pages/product-details/ProductDetails')),
        label: 'Product Details',
        permissions: [],
    },
    {
        path: '/cart',
        component: lazy(() => import('./pages/cart/Cart')),
        label: 'Cart',
        permissions: [],
    },
]  