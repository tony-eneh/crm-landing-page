import * as React from 'react';

type IAvatarProps = React.ComponentProps<'div'> & React.ComponentProps<'img'>;

export const avatarWidth = 32;
export function Avatar(props: IAvatarProps) {
  const className = `rounded-full border border-2 border-white w-[32px] aspect-square text-white bg-indigo-900 grid place-items-center text-sm font-light ${props.className}`;

  if (props.src) {
    return <img {...props} className={className} />;
  }

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
}
