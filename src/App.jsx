// src/App.jsx
import { useState, useEffect } from 'react';
import './styles/_globals.sass';
import Banner from './components/Banner';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Bubble from './components/Bubble';

// Componente raiz da aplicação
const App = () => {
  const [bubblePosition, setBubblePosition] = useState(null);

  // Manipulador global de cliques em links
  const handleLinkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const element = e.currentTarget;
    const isCopyright = element.closest('.Copyright');

    setBubblePosition({
      element,
      direction: isCopyright ? 'up' : 'down'  // Lógica de posicionamento
    });
  };

  // Fechar bubble ao clicar fora
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