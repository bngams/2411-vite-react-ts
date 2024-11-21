import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import { NavigationProvider } from './providers/NavigationProvider';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <NavigationProvider>
      <NextUIProvider>              
        <BrowserRouter> 
          <div className="App">
            {/* Use a Header custom component */}
            <Header />
            <div className="my-content">
              <AppRoutes />
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
