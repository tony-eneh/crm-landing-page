import * as React from 'react';

export interface IStarIconProps extends React.ComponentProps<'svg'> {}

export function StarIcon(props: IStarIconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2L14.4697 9.60081H22.4616L15.996 14.2984L18.4656 21.8992L12 17.2016L5.53436 21.8992L8.00402 14.2984L1.53838 9.60081H9.53035L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
