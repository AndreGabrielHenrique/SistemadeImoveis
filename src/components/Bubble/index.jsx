// src/components/Bubble/index.jsx
import { useLayoutEffect, useRef } from 'react';
import styles from './index.module.sass';

// Componente de bolha informativa que segue elementos da interface
const Bubble = ({ position }) => {
  const bubbleRef = useRef(null);
  const yOffset = 7; // Offset vertical para espaçamento

  // Hook para atualizar posição sincronizado com layout
  useLayoutEffect(() => {
    const updatePosition = () => {
      if (!position?.element || !bubbleRef.current) return;

      const element = position.element;
      const bubble = bubbleRef.current;
      
      // Cálculo da posição horizontal centralizada
      const rect = element.getBoundingClientRect();
      const x = rect.left + (rect.width / 2) + window.scrollX;
      
      // Verificação de espaço disponível para posicionamento vertical
      const spaceBelow = window.innerHeight - rect.bottom;
      const bubbleHeight = bubble.offsetHeight + yOffset;
      
      let y;
      let direction = 'down';
      
      // Lógica de posicionamento inteligente
      if (spaceBelow < bubbleHeight && rect.top > bubbleHeight) {
        y = rect.top + window.scrollY - bubbleHeight;
        direction = 'up';
      } else {
        y = rect.top + window.scrollY + rect.height + yOffset;
        direction = 'down';
      }

      // Aplicação das posições calculadas
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      bubble.setAttribute('data-direction', direction);
    };

    updatePosition();
    
    // Otimização de performance com debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updatePosition, 100);
    };

    // Event listeners para atualizações
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', handleResize);

    // Observer para mudanças de tamanho no elemento
    const resizeObserver = new ResizeObserver(updatePosition);
    if (position?.element) {
      resizeObserver.observe(position.element);
    }

    // Cleanup dos listeners
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, [position]);

  return (
    <div 
      ref={bubbleRef}
      className={styles.Bubble}
      role="tooltip"
      aria-live="polite"
    >
      Em construção
    </div>
  );
};

export default Bubble;