import React from "react";

interface Props {
  className?: string;
}

export const Envelope: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg
      width="42"
      height="24"
      viewBox="0 0 42 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="1.31812" y="0.5" width="39.3637" height="23" stroke="black" />
      <path d="M39.1109 0.499963L21 11.4162L2.88896 0.499961L39.1109 0.499963Z" stroke="black" />
    </svg>
  );
};
