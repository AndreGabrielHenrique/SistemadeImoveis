// src/components/Bubble/index.jsx
import { useLayoutEffect, useRef } from 'react';
import styles from './index.module.sass';

const Bubble = ({ position }) => {
  const bubbleRef = useRef(null);
  const yOffset = 7; // Distância fixa de 15px

  useLayoutEffect(() => {
    const updatePosition = () => {
      if (!position?.element || !bubbleRef.current) return;

      const element = position.element;
      const isCopyright = element.closest('.Copyright');
      
      // Posicionamento preciso com scroll
      const rect = element.getBoundingClientRect();
      const x = rect.left + (rect.width / 2) + window.scrollX;
      const y = isCopyright 
        ? rect.top + window.scrollY - bubbleRef.current.offsetHeight - yOffset 
        : rect.top + window.scrollY + rect.height + yOffset;

      bubbleRef.current.style.left = `${x}px`;
      bubbleRef.current.style.top = `${y}px`;
    };

    updatePosition();
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [position]);

  return (
    <div 
      ref={bubbleRef}
      className={styles.Bubble}
      data-direction={position?.direction || 'down'}
    >
      Em construção
    </div>
  );
};

export default Bubble;