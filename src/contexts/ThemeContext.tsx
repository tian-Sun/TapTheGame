'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // 确保在客户端环境中运行
    if (typeof window !== 'undefined') {
      // 从localStorage读取主题设置
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        // 检查系统偏好
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
      }
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      // 应用主题到document
      const html = document.documentElement;
      html.classList.remove('light', 'dark');
      html.classList.add(theme);
      localStorage.setItem('theme', theme);
      
      console.log('Theme applied to HTML element:', theme);
      console.log('HTML classes:', html.className);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    console.log('Toggle theme clicked, current theme:', theme);
    setTheme(prev => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      console.log('Switching to theme:', newTheme);
      return newTheme;
    });
  };

  // 防止水合不匹配，但确保始终渲染内容
  if (!mounted) {
    return <div className="dark">{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // 提供降级方案，返回默认的深色主题
    return {
      theme: 'dark' as Theme,
      toggleTheme: () => {
        console.warn('ThemeProvider not found, theme toggle disabled');
      }
    };
  }
  return context;
}
