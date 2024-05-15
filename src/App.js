// App.js
import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundVideo from './components/BackgroundVideo';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Services from './components/Services';
import About from './components/About';
import BloodDonationForm from './components/forms'; // Import the form component

const App = () => {
  const backgroundVideoRef = useRef();

  const menuItems = ["Home", "About", "Services", "Benefits", "Forms"];
  const [activeMenuItem, setActiveMenuItem] = React.useState(menuItems[0]);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="App">
      <Header menuItems={menuItems} activeMenuItem={activeMenuItem} onMenuItemClick={handleMenuItemClick} />
      <BackgroundVideo ref={backgroundVideoRef} />
      <div className="container">
        {/* Render the content based on the selected menu item */}
        {activeMenuItem === "Home" && <Home />}
        {activeMenuItem === "Benefits" && <Pricing />}
        {activeMenuItem === "Services" && <Services />}
        {activeMenuItem === "About" && <About />}
        {activeMenuItem === "Forms" && <BloodDonationForm />} {/* Display the form when "forms" is selected */}
        {/* Add other conditions for different menu items */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
