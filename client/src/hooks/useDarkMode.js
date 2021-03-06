import { useLocalStorage } from './useLocalStorage.js';
import { useEffect } from 'react';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkmode');

  useEffect(() => {
    let body = document.querySelector('body');
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
