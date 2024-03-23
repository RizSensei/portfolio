"use-client";
import {motion} from "framer-motion";

const Projects = () => {
  const projects =[
    {
        name: "Portfolio",
        image: "../images/projects/portfolio.png",
        link: "",
        tool: ["NextJS", "TailwindCSS", "Framer Motion"]
    },
    {
        name: "IMIS",
        image: "../images/projects/imis.png",
        link: "",
        tool: ["HTML", "TailwindCSS"]
    },
    {
        name: "Azedw",
        image: "../images/projects/azedw.png",
        link: "",
        tool: ["ReactJS", "Material UI"]
    }
]

  return (
    <div className="text-light w-full flex flex-col items-center justify-center gap-5">
      <section className=" relative w-full text-center">
        <h1 className="bungee-regular text-8xl opacity-10">Portfolio</h1>
        <div className="tektur-regular absolute bottom-0 left-1/2 text-darkPurple text-4xl">
          Projects
        </div>
      </section>
      <main className="mt-10">
        <div className="w-full grid grid-cols-3 gap-0">
          {projects.map((project, i) => {
          return( 
          <motion.div key={i} className="h-64 2xl:h-96 w-full border-2 border-gray-200/20 bg-black cursor-pointer"
           whileHover={{
            scale: 1.1,
            zIndex: 10,
          }}>
            <img src={project.image} alt={project.name} className="w-full h-full object-cover scale-95"/>
          </motion.div>);
        })}
        </div>
        
      </main>
    </div>
  );
};

export default Projects;
