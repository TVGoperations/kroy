import React from "react";

interface Props {
  className?: string;
}

export const BrandTop: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="315"
      height="46"
      viewBox="0 0 315 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M136.948 7.5C130.313 11.25 123.678 15 116.897 15H56L50.4443 25H16.9712C16.4536 33.9233 9.05322 41 0 41V46H315V41C305.947 41 298.546 33.9233 298.029 25H263.556L258 15H197.103C190.321 15 183.687 11.25 177.051 7.5C170.416 3.75 163.781 0 157 0C150.219 0 143.583 3.75 136.948 7.5Z"
        fill="white"
      />
    </svg>
  );
};
