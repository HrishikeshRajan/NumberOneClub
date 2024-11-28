import React from 'react';
import { cn } from '@/lib/utils';
import { ThemedButtonProps, COLORS, MODE } from './types';
import { buttonThemes } from './theme.config';
import { Button } from '@/components/ui/button';

export const ThemedButton: React.FC<ThemedButtonProps> = ({
  children,
  className,
  mode = MODE.solid,
  colorTheme = COLORS.skobeloff,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled = false,
  ...props
}) => {


  const theme = buttonThemes[colorTheme][mode];

  const baseStyles = cn(
    'px-4 py-2 rounded-3xl text-base font-semibold',
    'transition-all duration-300',
    'select-none border-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',

    theme.hover.background,
    theme.hover.text,
    theme.hover.border,
    theme.active.background,
    theme.active.text,
    theme.active.border,
    theme.background,
    theme.text,
    theme.border,
    className
  );

  return (
    <Button
      disabled={disabled || isLoading}
      className={baseStyles}
      {...props}
    >
      <span className="flex items-center justify-center gap-2">
        {leftIcon}
        {children}
        {rightIcon}
      </span>
    </Button>
  );
};

export default ThemedButton;