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

  const basic_skills = [
    {
      name: "React Native",
      icon:""
    },
    {
      name: "Laravel",
      icon:""
    },
    {
      name: "Vue Js",
      icon:""
    },
    {
      name: "Firebase",
      icon:""
    },
  ]

  return (
    <>
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
      <div className="mt-5">
        <h1 className="text-white text-sm">Begineer Basic Skills</h1>
        <div className="mt-2 flex flex-wrap gap-2">
        {basic_skills.map((skill, idx) => {
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
      </div>
    </>
  );
};

export default SkillsTab;
