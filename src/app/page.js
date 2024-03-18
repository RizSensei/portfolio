"use client";
import Home_Left from "@/components/Home/Home_Left";
import Home_Right from "@/components/Home/Home_Right";
import LeftData from "@/components/Profile/LeftData";
import RightData from "@/components/Profile/RightData";
import "../../public/css/style.css";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 md:gap-32">
      <div
        id="home"
        className="w-full md:flex gap-5 items-center justify-between mt-5"
      >
        <Home_Left />
        <Home_Right />
      </div>
      <div id="profile" className="w-full flex flex-col-reverse md:flex-row justify-between">
        <RightData />
        <LeftData />
      </div>
      <div className="flex w-full items-center justify-center">
        <Skills />
      </div>
      <div className="w-full">
        <Projects />
      </div>
    </main>
  );
}
