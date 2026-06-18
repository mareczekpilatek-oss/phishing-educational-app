import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = '日月火水木金土アニメコンピュータプログラミング01';
    const charArray = chars.split('');
    
    const createMatrixChar = () => {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = charArray[Math.floor(Math.random() * charArray.length)];
      
      const randomLeft = Math.random() * 100;
      const randomDelay = Math.random() * 5;
      const randomDuration = 8 + Math.random() * 4;
      
      char.style.left = randomLeft + '%';
      char.style.animationDelay = randomDelay + 's';
      char.style.animationDuration = randomDuration + 's';
      
      containerRef.current.appendChild(char);
      
      setTimeout(() => char.remove(), randomDuration * 1000);
    };

    const interval = setInterval(createMatrixChar, 200);
    
    // Tworzenie początkowych znaków
    for (let i = 0; i < 20; i++) {
      setTimeout(() => createMatrixChar(), Math.random() * 1000);
    }

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="matrix-background" />;
};

export default MatrixBackground;
