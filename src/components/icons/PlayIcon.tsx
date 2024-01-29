import * as React from 'react';

export interface IPlayIconProps extends React.ComponentProps<'svg'> {}

export function PlayIcon(props: IPlayIconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#clip)">
        <path
          d="M3.20054 2.71313C3.19903 1.94333 4.03142 1.46057 4.69884 1.84416L20.824 11.112C21.4914 11.4956 21.4933 12.4578 20.8274 12.844L4.73865 22.1749C4.07274 22.5611 3.23847 22.0816 3.23696 21.3118L3.20054 2.71313Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
