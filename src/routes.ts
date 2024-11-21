import { lazy } from "react";
import { MenuItems } from "./models/MenuItem";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

export const mainNavItems: MenuItems = [
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
    // {
    //     path: '/orders',
    //     component: Orders,
    //     label: 'Orders',
    //     permissions: ['user']
    // },
];