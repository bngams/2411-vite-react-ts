import React from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './pages/home/Home';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';

function App() {
  return (
    <NextUIProvider>              
      <BrowserRouter> 
        <div className="App">
          {/* Use a Header custom component */}
          <Header />
          <div className="my-content">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<About />} />
              </Routes>
          </div>
          {/* Use a Footer custom component */}
          <Footer />
        </div>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
