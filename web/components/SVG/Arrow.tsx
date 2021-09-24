import React from "react";

interface Props {
  className?: string;
}

export const Arrow: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg className={className} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.49776 0.999964C8.49776 0.722591 8.27491 0.497737 8 0.497736L3.52013 0.497737C3.24523 0.497737 3.02237 0.722592 3.02237 0.999964C3.02237 1.27734 3.24523 1.50219 3.52013 1.50219L7.50224 1.50219L7.50224 5.52001C7.50224 5.79738 7.72509 6.02223 8 6.02223C8.27491 6.02224 8.49776 5.79738 8.49776 5.52001L8.49776 0.999964ZM1.35197 8.41787L8.35197 1.35509L7.64803 0.644836L0.648028 7.70762L1.35197 8.41787Z"
        fill="black"
      />
    </svg>
  );
};
