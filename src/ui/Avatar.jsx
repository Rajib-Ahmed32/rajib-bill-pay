import React from "react";

const Avatar = ({
  src,
  alt = "User Avatar",
  size = "w-10 h-10",
  className = "",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${size} ${className}`}
    />
  );
};

export default Avatar;
