import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { mainNavItems } from './routes';
import { Suspense } from 'react';
import { NavigationProvider } from './providers/NavigationProvider';

function App() {
  return (
    <NavigationProvider>
      <NextUIProvider>              
        <BrowserRouter> 
          <div className="App">
            {/* Use a Header custom component */}
            <Header />
            <div className="my-content">
                {/* Can become a component */}
                <Suspense fallback={(<div>Loading...</div>)}>
                  <Routes>
                    {mainNavItems.map((item, index) => ( 
                      <Route key={index} path={item.path} element={<item.component/>} />
                    ))} 
                  </Routes>
                </Suspense>
            </div>
            {/* Use a Footer custom component */}
            <Footer />
          </div>
        </BrowserRouter>
      </NextUIProvider>
    </NavigationProvider> 
  );
}

export default App;
