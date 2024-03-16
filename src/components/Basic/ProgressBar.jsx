import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProgressBar = ({ tool, progress }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <main className="text-sm">
      <h1 className="font-semibold text-start">{tool}</h1>
      <div className="flex gap-2 items-center">
        <div className="w-72 rounded-md bg-white border-black overflow-hidden">
          <motion.div
           ref={ref}
            className="h-4 bg-darkPurple"
            initial={{ width: "0%" }}
            animate={{
              width: inView ?  `${progress}%`:"0%",
              transition: { duration: 1, ease: "easeIn" },
            }}
          />
        </div>
        {progress}%
      </div>
    </main>
  );
};

export default ProgressBar;
