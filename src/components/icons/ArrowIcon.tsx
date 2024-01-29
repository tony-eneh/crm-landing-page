import * as React from 'react';

export interface IArrowIconProps extends React.ComponentProps<'svg'> {}

export function ArrowIcon(props: IArrowIconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M2 12H12H22M22 12L14 4M22 12L18 16L14 20"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
