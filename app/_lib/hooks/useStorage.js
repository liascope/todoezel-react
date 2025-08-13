'use client'

import { useEffect, useState } from 'react';

export default function useStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // call only on browser 
    if (typeof window !== 'undefined') {
      try {
        const item = localStorage.getItem(key);
        setStoredValue(item ? JSON.parse(item) : initialValue);
      } catch (error) {
        console.error(`useStorage: Error reading "${key}" from localStorage`, error);
        setStoredValue(initialValue);
      }
    }
    {/* eslint-disable-next-line */}
  }, [key]);

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`useStorage: Error setting "${key}" to localStorage`, error);
    }
  };
  return [isClient ? storedValue : initialValue, setValue];
}
