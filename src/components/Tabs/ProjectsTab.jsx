import React from 'react'

const ProjectsTab = () => {
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
    <div>ProjectsTab</div>
  )
}

export default ProjectsTab