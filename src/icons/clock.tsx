import { SVGProps } from 'react';

export function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></path>
        <path d="M12 6v6l4 2"></path>
      </g>
    </svg>
  );
}
