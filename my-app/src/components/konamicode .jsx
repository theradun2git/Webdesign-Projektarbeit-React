import React, { useState, useEffect, useRef } from 'react';
import EasterEgg from './easteregg';

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown'];

const KonamiCode = () => {
  const [showGame, setShowGame] = useState(false);
  const index = useRef(0);

  useEffect(() => {
    const listener = (event) => {
      if (event.key === konamiCode[index.current]) {
        index.current++;
        if (index.current === konamiCode.length) {
          setShowGame(true);
          index.current = 0;
        }
      } else {
        index.current = 0;
      }
    };

    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <div>
      {showGame && <EasterEgg />}
    </div>
  );
};

export default KonamiCode;