import React from "react";
import Button from "@/components/Basic/Button";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

const Home_Right = () => {
  return (
    <motion.div
      className="w-1/2 flex flex-col space-y-10"
      variants={quote}
      initial="initial"
      animate="animate"
    >
      <h1 className="tektur-regular text-darkPurple text-4xl font-bold capitalize">
        Turning Vision into Reality with Design & Code
      </h1>
      <p className="text-light text-justify">
        Hello there! I'm{" "}
        <span className="tektur-regular text-darkPurple font-medium text-3xl">
          <Typewriter
            options={{
              loop: true,
              startDelay: 1000,
              typeSpeed: 1000,
              deleteSpeed: 1000,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Rijan Maharjan")
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
          />
        </span>
        <br />A passionate frontend developer weaving digital magic through
        lines of code. As you step into my digital realm, you'll discover a
        fusion of design and functionality that brings web experiences to life.
        With a keen eye for aesthetics and a love for clean, user-friendly
        interfaces, I specialize in crafting visually stunning and intuitively
        responsive websites.
      </p>
      <div>
        <Button text="Download Resume" />
      </div>
    </motion.div>
  );
};

export default Home_Right;
