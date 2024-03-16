import React from "react";

const Bento = ({ children, style, pad=true, bgColor=true }) => {
  const padding = pad ? "px-4 py-2" : "";

  const color = bgColor ? "bg-neutral-900" : "bg-darkPurple";

  return (
    <div
      className={`${style} ${padding} ${color} overflow-hidden rounded-lg flex text-white items-center justify-center gap-2 
    hover:scale-105 transform duration-300 ease-in-out cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default Bento;
