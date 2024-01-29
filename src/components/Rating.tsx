import * as React from 'react';
import { StarIcon } from './icons/StarIcon';

export interface IRatingProps extends React.ComponentProps<'div'> {}

export function Rating(props: IRatingProps) {
  return (
    <div {...props} className={`flex ${props.className}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon key={star} />
      ))}
    </div>
  );
}
