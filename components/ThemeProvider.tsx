'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light' | 'retro' | 'paper' | 'aurora' | 'system';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark');

  // On mount, read saved preference
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') as Theme | null;
    if (saved) apply(saved);
    else apply('dark');
  }, []);

  function apply(t: Theme) {
    setThemeState(t);
    let resolved: string = t;
    if (t === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', resolved);
  }

  function setTheme(t: Theme) {
    localStorage.setItem('portfolio-theme', t);
    apply(t);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
