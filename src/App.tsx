import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import { NavigationProvider } from './providers/NavigationProvider';
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <NavigationProvider>
        <NextUIProvider>              
          <BrowserRouter> 
            <div className="flex flex-col min-h-screen">
              {/* Use a Header custom component */}
              <Header />
              <div className="flex-grow p-4">
                <AppRoutes />
              </div>
              {/* Use a Footer custom component */}
              <Footer />
            </div>
          </BrowserRouter>
        </NextUIProvider>
      </NavigationProvider>
    </Provider>
  );
}

export default App;
