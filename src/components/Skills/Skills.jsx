import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skill = ({ name, x, y, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className="absolute z-10 cursor-pointer bg-darkPurple px-3 py-2 rounded-full"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: inView ? x : 0, y: inView ? y : 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <div className="flex gap-1 items-center justify-center">
        <iconify-icon icon={icon} height="20px" width="20px"></iconify-icon>
        {name}
      </div>
    </motion.div>
  );
};

const skillLists = [
  {
    name: "ReactJS",
    x: "-10vw",
    y: "-10vh",
    icon: "vscode-icons:file-type-reactjs",
  },
  { name: "Figma", x: "-30vw", y: "0vh", icon: "devicon:figma" },
  { name: "Tailwind CSS", x: "10vw", y: "-10vh", icon: "devicon:tailwindcss" },
  { name: "Material UI", x: "10vw", y: "10vh", icon: "logos:material-ui" },
  { name: "NextJS", x: "-10vw", y: "10vh", icon: "logos:nextjs-icon" },
  { name: "Framer Motion", x: "30vw", y: "0vh", icon: "devicon:framermotion" },
];

const Skills = () => {
  return (
    <div className="w-full text-light">
      <h2 className="w-full text-center text-3xl text-darkPurple bg-transparent">
        Skills
      </h2>
      <div className="p-5 md:p-20 w-full h-screen md:h-full  relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="cursor-pointer  rounded-full"
          whileHover={{ scale: 1.05 }}
        >
          <iconify-icon
            icon="line-md:sun-rising-filled-loop"
            height="60px"
            width="60px"
            style={{
              WebkitFilter: "drop-shadow(0px 0px 10px #fff)",
              filter: "drop-shadow(0px 0px 10px #fff)",
            }}
          ></iconify-icon>
        </motion.div>
        {skillLists.map((item, i) => {
          return (
            <Skill
              key={i}
              name={item.name}
              x={item.x}
              y={item.y}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
