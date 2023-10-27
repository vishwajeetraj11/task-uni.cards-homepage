import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {}

const Down = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="60"
      viewBox="0 0 43 60"
      fill="none"
      {...props}
    >
      <path
        d="M21.4199 1.99999L21.4199 57.5803"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 38.4096L21.4207 57.5803L40.5913 38.4096"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Down;
