import { SVGProps } from 'react';

export function IconLabel(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m10.98 20.194l-7.298-7.298c-.37-.37-.58-.87-.587-1.392L3 4.015A1 1 0 0 1 4.015 3l7.489.095a2 2 0 0 1 1.392.587l7.298 7.298c.674.673 1.192 1.959.424 2.727l-6.91 6.91c-.769.769-2.055.25-2.728-.423M8.019 7.552l-.707-.707"
      ></path>
    </svg>
  );
}
