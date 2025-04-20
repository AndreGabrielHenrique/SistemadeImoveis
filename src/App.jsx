// src/App.jsx
import { useState, useEffect } from 'react';
import './styles/_globals.sass';
import Banner from './components/Banner';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Bubble from './components/Bubble';

const App = () => {
  const [bubblePosition, setBubblePosition] = useState(null);

  const handleLinkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const element = e.currentTarget;
    const isCopyright = element.closest('.Copyright');

    setBubblePosition({
      element,
      direction: isCopyright ? 'up' : 'down'
    });
  };

  useEffect(() => {
    const closeBubble = () => setBubblePosition(null);
    document.addEventListener('click', closeBubble);
    return () => document.removeEventListener('click', closeBubble);
  }, []);

  return (
    <div>
      <Header onLinkClick={handleLinkClick} />
      <Banner onLinkClick={handleLinkClick} />
      <Home onLinkClick={handleLinkClick} />
      <Footer onLinkClick={handleLinkClick} />
      {bubblePosition && <Bubble position={bubblePosition} />}
    </div>
  );
};

export default App;