import React, { ReactNode } from 'react';

type UseDuplicateComponentsProps = {
  duplicate: number;
  Component: React.ComponentType<any>;
  componentProps?: Record<string, any>;
};

export function useDuplicateComponents({
  duplicate,
  Component,
  componentProps = {},
}: UseDuplicateComponentsProps): ReactNode[] {
  return Array.from({ length: duplicate }).map((_, index) => (
    <Component key={index} {...componentProps} />
  ));
}
