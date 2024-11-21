import React from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      {/* Use a Header custom component */}
      <Header />
      <div className="my-content">
        <Home />
      </div>
      {/* Use a Footer custom component */}
      <Footer />
    </div>
  );
}

export default App;
