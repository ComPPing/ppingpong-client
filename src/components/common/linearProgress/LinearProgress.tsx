import React from 'react';

interface LinearProgressProps {
  process: number;
}

const LinearProgress = ({ process }: LinearProgressProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="10"
      viewBox="0 0 340 10"
      fill="none"
      preserveAspectRatio="none"
    >
      <rect width="100%" height="10" rx="5" ry="5" fill="#DDDDDD" />
      <rect
        width={340 * (process / 100)}
        height="10"
        rx="5"
        ry="5"
        fill="#D7621A"
      />
    </svg>
  );
};

export { LinearProgress };
