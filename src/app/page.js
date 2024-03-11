'use client';
import Image from "next/image";
import ProfilePicture from "../../public/images/profile.png";
import { motion } from "framer-motion";
import Link from "next/link";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5
    },
  },
};

export default function Home() {
  return (
    <div className="w-full max-w-max flex space-x-5 items-center justify-between mt-5">
      <div className="w-[30rem] h-[30rem]">
        <Image
          src={ProfilePicture}
          alt="Profile image"
          loading="eager"
          priority="high"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <motion.div
        className="w-1/2 flex flex-col space-y-10"
        variants={quote}
        initial="initial"
        animate="animate"
      >
        <h1 className="text-dark text-4xl font-bold capitalize">
          Turning Vision into Reality with Design & Code
        </h1>
        <p className="text-dark text-justify">
          Hello there! I'm{" "}
          <span className="font-medium text-lg">Rijan Maharjan</span>, a
          passionate frontend developer weaving digital magic through lines of
          code. As you step into my digital realm, you'll discover a fusion of
          design and functionality that brings web experiences to life. With a
          keen eye for aesthetics and a love for clean, user-friendly
          interfaces, I specialize in crafting visually stunning and intuitively
          responsive websites.
        </p>
        <div>
          <Link href="#" className="w-fit bg-dark text-white font-medium py-1.5 px-3 rounded-lg flex items-center hover:text-dark hover:bg-white hover:border-2 hover:border-dark"
          download={true}>
            Resume{" "}
            <iconify-icon
              icon="bitcoin-icons:send-filled"
              rotate="135deg"
            ></iconify-icon>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
