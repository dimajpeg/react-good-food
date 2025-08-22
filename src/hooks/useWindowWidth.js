import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    // Очистка при размонтировании компонента
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Пустой массив, чтобы эффект запустился один раз

  return width;
}

export default useWindowWidth;