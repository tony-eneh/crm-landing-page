import * as React from 'react';

export interface IOutlinedButtonProps extends React.ComponentProps<'button'> {}

export function OutlinedButton(props: IOutlinedButtonProps) {
  return (
    <button
      {...props}
      className={`font-light py-2 px-5 rounded-full border border-current text-nowrap ${props.className}`}
    >
      {props.children}
    </button>
  );
}
