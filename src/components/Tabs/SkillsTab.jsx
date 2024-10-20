import React from "react";

const SkillsTab = () => {
  const skills = [
    {
      name: "ReactJS",
      icon: "vscode-icons:file-type-reactjs",
    },
    { name: "Figma", icon: "devicon:figma" },
    { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
    { name: "Material UI", icon: "logos:material-ui" },
    { name: "NextJS", icon: "logos:nextjs-icon" },
    { name: "Framer Motion", icon: "devicon:framermotion" },
  ];

  return (
    <div className=" flex flex-wrap gap-2">
      {skills.map((skill, idx) => {
        return (<div key={idx} className="px-3 py-2 rounded-lg bg-white">
          <div className="flex gap-1 items-center justify-center">
            <iconify-icon
              icon={skill.icon}
              height="20px"
              width="20px"
            ></iconify-icon>
            <h1 className="text-darkPurple">{skill.name}</h1>
          </div>
        </div>);
      })}
    </div>
  );
};

export default SkillsTab;
