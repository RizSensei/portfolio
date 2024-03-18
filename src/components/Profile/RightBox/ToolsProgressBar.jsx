"use client";
import React from "react";
import ProgressBar from "../../Basic/ProgressBar";

const ToolsProgressBar = () => {
  const tools = [
    { name: "ReactJS", progress: 20 },
    { name: "Figma", progress: 30 },
    { name: "Tailwind", progress: 80 },
    { name: "NextJS", progress: 10 },
  ];
  return (
    <main className="flex flex-col gap-5">
      {tools.map((tool, index) => {
        return <ProgressBar key={index} tool={tool.name} progress={tool.progress} />;
      })}
    </main>
  );
};

export default ToolsProgressBar;
