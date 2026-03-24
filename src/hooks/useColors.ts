import { useTheme } from '../context/ThemeContext';

export const useColors = () => {
  const themeContext = useTheme();
  
  // Get CSS variable value
  const getCssVar = (varName: string): string => {
    if (typeof window === 'undefined') return '';
    return getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
  };

  return {
    bg: {
      primary: 'var(--bg-primary)',
      secondary: 'var(--bg-secondary)',
      tertiary: 'var(--bg-tertiary)',
      elevated: 'var(--bg-elevated)',
    },
    
    text: {
      primary: 'var(--text-primary)',
      secondary: 'var(--text-secondary)',
      muted: 'var(--text-muted)',
      disabled: 'var(--text-disabled)',
    },
    
    accent: {
      primary: themeContext?.accentColor || '#86efac', // Fallback
      secondary: 'var(--accent-secondary)',
      tertiary: 'var(--accent-tertiary)',
      muted: 'var(--accent-muted)',
    },
    
    status: {
      success: 'var(--success)',
      warning: 'var(--warning)',
      error: 'var(--error)',
      info: 'var(--info)',
    },
    
    border: {
      primary: 'var(--border-primary)',
      secondary: 'var(--border-secondary)',
    },
    
    components: {
      card: {
        bg: 'var(--card-bg)',
        border: 'var(--card-border)',
      },
      input: {
        bg: 'var(--input-bg)',
        border: 'var(--input-border)',
      },
      button: {
        primary: {
          bg: 'var(--button-primary-bg)',
          text: 'var(--button-primary-text)',
        },
        secondary: {
          bg: 'var(--button-secondary-bg)',
          text: 'var(--button-secondary-text)',
        },
      },
    },
    
    getCssVar,
    theme: themeContext?.theme || 'dark',
  };
};