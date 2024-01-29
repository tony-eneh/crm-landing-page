import { useState, useEffect } from 'react';

export function useScrollOffset() {
  const [offset, setOffset] = useState(0);

  function handleScroll() {
    setOffset(window.scrollY);
  }

  useEffect(() => {
    setOffset(window.scrollY);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return offset;
}
