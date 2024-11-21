import React from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './pages/home/Home';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        {/* Use a Header custom component */}
        <Header />
        <div className="my-content">
          <Home />
        </div>
        {/* Use a Footer custom component */}
        <Footer />
      </div>
    </NextUIProvider>
  );
}

export default App;
