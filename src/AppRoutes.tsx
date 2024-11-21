import { Suspense } from "react";
import { useNavigationCtx } from "./providers/NavigationProvider";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
    const { mainNavItems } = useNavigationCtx(); 
    return (
      <Suspense fallback={(<div>Loading...</div>)}>
        <Routes>
          {/* TODO: /!\ according to usage prefer to define static routes */}
          {mainNavItems.map((item, index) => ( 
            <Route key={index} path={item.path} element={<item.component/>} />
          ))} 
        </Routes>
      </Suspense>
    );
} 
export default AppRoutes;