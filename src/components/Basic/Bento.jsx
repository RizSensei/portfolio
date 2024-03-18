import React from "react";
import { motion } from "framer-motion";

const Bento = ({ children, style, pad=true, bgColor=true }) => {
  const padding = pad ? "px-4 py-2" : "";

  const color = bgColor ? "bg-zinc-900" : "bg-darkPurple";

  return (
    <motion.div
      className={`${style} ${padding} ${color} overflow-hidden rounded-lg flex text-white items-center justify-center gap-2  duration-300 ease-in-out transform cursor-pointer backdrop-blur-xl backdrop-brightness-150`
    }
    whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.div>
  );
};

export default Bento;
