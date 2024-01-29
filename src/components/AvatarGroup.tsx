import * as React from 'react';
import { Avatar, avatarWidth } from '.';

export interface IAvatarGroupProps extends React.ComponentProps<'div'> {}

export function AvatarGroup(props: IAvatarGroupProps) {
  const avatars = Array.isArray(props.children)
    ? props.children
    : [props.children];

  const count = Math.min(avatars.length, 3);
  return (
    <div
      className={`grid ${props.className}`}
      style={{
        gridTemplateColumns: `repeat(${count * 2}, minmax(0, 1fr))`,
        width: avatarWidth * count,
      }}
    >
      {avatars.slice(0, count).map((Avatar, i) => (
        <div
          style={{
            gridColumn: `${i + 1} / span 2`,
            gridRow: 1,
          }}
          key={i}
        >
          {Avatar}
        </div>
      ))}
      {count < avatars.length && (
        <div
          style={{
            gridColumn: `${count + 1} / span 2`,
            gridRow: 1,
          }}
        >
          <Avatar>+{avatars.length - count}</Avatar>
        </div>
      )}
    </div>
  );
}
