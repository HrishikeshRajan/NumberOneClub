import React, { ReactNode } from 'react';

type UseDuplicateComponentsProps = {
  duplicate: number;
  Component: React.ComponentType<any>;
  componentProps?: Record<string, any>;
  className?:string;
};

export function useDuplicateComponents({
  duplicate,
  Component,
  componentProps = {},
  className
}: UseDuplicateComponentsProps): ReactNode[] {
  return Array.from({ length: duplicate }).map((_, index) => (
    <div key={index} className={className}>
    <Component {...componentProps} />
  </div>
  ));
}
