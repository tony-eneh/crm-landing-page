import * as React from 'react';

export interface IGlassyCardProps extends React.ComponentProps<'div'> {}

export function GlassyCard(props: IGlassyCardProps) {
  return (
    <div
      {...props}
      className={`bg-white/20 backdrop-blur-sm p-2 rounded-md border border-white/20 ${props.className}`}
    >
      {props.children}
    </div>
  );
}
