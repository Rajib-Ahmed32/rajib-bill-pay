import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="w-12 h-12 border-4 border-t-4 border-t-[#ca970b] border-gray-300 rounded-full animate-spin shadow-md"></div>
    </div>
  );
};

export default Loader;
