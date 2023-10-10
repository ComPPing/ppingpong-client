'use client';

import React from 'react';

import clsx from 'clsx';

import { calculateStyle } from '@/utils/calculateStyle';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: VoidFunction;
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'disabled';
  leftIcon?: React.ReactNode;
  className?: string;
}

const sizeStyle = {
  sm: 'h-10 text-subtitle1',
  md: 'h-12 text-subtitle1',
  lg: 'h-14 text-h4',
};

const colorStyle = {
  primary: 'bg-primary-main text-white',
  secondary: 'bg-secondary-main text-white',
  disabled: 'bg-disabled-main text-disabled-text',
};

const Button = ({
  onClick,
  text,
  size = 'md',
  color,
  leftIcon,
  className,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        'w-full rounded-lg flex items-center justify-center gap-2',
        calculateStyle(size, sizeStyle),
        color && calculateStyle(color, colorStyle),
      )}
      onClick={onClick}
    >
      {leftIcon}
      {text}
    </button>
  );
};

export { Button };
