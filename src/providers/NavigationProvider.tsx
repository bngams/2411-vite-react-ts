import { createContext, useContext, useEffect, useState } from "react";
import { NavItems } from "../models/NavItem";
import { mainNavItems as items } from "../routes";

const checkToken = () => {
    const token = localStorage.getItem("token");
    if(token) {
        // fetch(api/hasValidSession)
        return true;
    } 
    return false;
} 

const NavigationContext = createContext<{ 
    mainNavItems: NavItems,
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}>({ 
    mainNavItems: [],
    isLoggedIn: false,
    setIsLoggedIn: () => {}
});

export const NavigationProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    const [mainNavItems, setMainNavItems] = useState<NavItems>([]);
    const hasValidToken = checkToken(); //
    const [isLoggedIn, setIsLoggedIn] = useState(hasValidToken);

    useEffect(() => {
        if(!isLoggedIn) {
            setMainNavItems(items.filter(item => item.permissions?.length === 0));
        } else {
            setMainNavItems(items);
        }
    }, [isLoggedIn]);
    
    return (
        <NavigationContext.Provider value={ { mainNavItems, isLoggedIn, setIsLoggedIn } } >
           {children} 
        </NavigationContext.Provider>
    )
} 

export const useNavigationCtx = () => useContext(NavigationContext);