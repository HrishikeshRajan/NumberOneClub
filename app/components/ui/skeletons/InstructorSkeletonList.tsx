import React from 'react';
import { twMerge } from 'tailwind-merge'

interface InstructorSkeletonListProps {
  duplicate: number;
  children: React.ReactNode;
  className?: string;
}

export default function InstructorSkeletonList({
  duplicate,
  children,
  className
}: InstructorSkeletonListProps) {
  return (
    <div className={twMerge('flex', className)}>
      {Array.from({ length: duplicate }).map((_, index) => (
        <React.Fragment key={index}>
          {children}
        </React.Fragment>
      ))}
    </div>
  );
}
