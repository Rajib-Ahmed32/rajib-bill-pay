import React from "react";

const badgeVariants = {
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  danger: "bg-red-100 text-red-800",
};

const Badge = ({ children, variant = "success" }) => {
  return (
    <span
      className={`text-xs font-semibold px-2.5 py-0.5 rounded ${badgeVariants[variant]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
