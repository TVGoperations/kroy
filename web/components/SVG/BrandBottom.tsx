import React from "react";

interface Props {
  className?: string;
}

export const BrandBottom: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="341"
      height="70"
      viewBox="0 0 341 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V4.62158L13 14.6216V35C22.3887 35 30 42.6113 30 52H59L69 70H271L281 52H311C311 42.6113 318.611 35 328 35V14.6216L341 4.62158V0H0Z"
        fill="white"
      />
    </svg>
  );
};
