import { Suspense, useEffect, useState } from "react";
import { useNavigationCtx } from "./providers/NavigationProvider";
import { Route, Routes } from "react-router-dom";
import { staticNavItems } from "./routes";
import { NavItems } from "./models/NavItem";

function AppRoutes() {
    const { mainNavItems } = useNavigationCtx(); 
    const [  allNavItems, setAllNavItems ] = useState<NavItems>([]);

    useEffect(() => {
      setAllNavItems([...mainNavItems, ...staticNavItems]); 
    }, [mainNavItems]); 

    return (
      <Suspense fallback={(<div>Loading...</div>)}>
        <Routes>
          {/* TODO: /!\ according to usage prefer to define static routes */}
          {allNavItems.map((item, index) => ( 
            <Route key={index} path={item.path} element={<item.component/>} />
          ))} 
        </Routes>
      </Suspense>
    );
} 
export default AppRoutes;