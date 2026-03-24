import React from 'react';
import { useColors } from '../../hooks/useColors';

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  children, 
  className = '', 
  style,
  ...props 
}) => {
  const colors = useColors();
  
  return (
    <div
      className={`rounded-xl transition-all duration-300 ${className}`}
      style={{
        backgroundColor: colors.components.card.bg,
        borderColor: colors.components.card.border,
        borderWidth: '1px',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  style,
  disabled,
  ...props 
}) => {
  const colors = useColors();
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const getVariantStyle = () => {
    if (disabled) {
      return {
        backgroundColor: colors.text.muted,
        color: colors.text.disabled,
        cursor: 'not-allowed',
        opacity: 0.5,
      };
    }

    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colors.accent.primary,
          color: colors.components.button.primary.text,
        };
      case 'secondary':
        return {
          backgroundColor: colors.components.button.secondary.bg,
          color: colors.components.button.secondary.text,
          border: `1px solid ${colors.border.primary}`,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: colors.accent.primary,
          border: `2px solid ${colors.accent.primary}`,
        };
      default:
        return {};
    }
  };

  return (
    <button
      className={`rounded-xl font-medium transition-all duration-300 
                  hover:scale-105 focus:outline-none focus:ring-2 
                  focus:ring-offset-2 disabled:hover:scale-100
                  ${sizeClasses[size]} ${className}`}
      style={{
        ...getVariantStyle(),
        ...style
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ 
  className = '',
  style,
  ...props 
}) => {
  const colors = useColors();
  
  return (
    <input
      className={`w-full p-3 rounded-lg transition-all duration-200
                  focus:outline-none focus:ring-2 ${className}`}
      style={{
        backgroundColor: colors.components.input.bg,
        borderColor: colors.components.input.border,
        borderWidth: '1px',
        color: colors.text.primary,
        ...style
      }}
      {...props}
    />
  );
};

export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({ 
  children,
  className = '',
  style,
  ...props 
}) => {
  const colors = useColors();
  
  return (
    <select
      className={`w-full p-3 rounded-lg transition-all duration-200
                  focus:outline-none focus:ring-2 cursor-pointer ${className}`}
      style={{
        backgroundColor: colors.components.input.bg,
        borderColor: colors.components.input.border,
        borderWidth: '1px',
        color: colors.text.primary,
        ...style
      }}
      {...props}
    >
      {children}
    </select>
  );
};