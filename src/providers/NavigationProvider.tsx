import { createContext, useContext, useEffect, useState } from "react";
import { MenuItems } from "../models/MenuItem";
import { mainNavItems as items } from "../routes";

const NavigationContext = createContext<{ 
    mainNavItems: MenuItems,
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}>({ 
    mainNavItems: [],
    isLoggedIn: false,
    setIsLoggedIn: () => {}
});

export const NavigationProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    const [mainNavItems, setMainNavItems] = useState<MenuItems>([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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