"use client";
import Home_Left from "@/components/Home/Home_Left";
import Home_Right from "@/components/Home/Home_Right";
import LeftData from "@/components/Profile/LeftData";
import RightData from "@/components/Profile/RightData";
import "../../public/css/style.css";



export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <div id="home" className="w-full  flex space-x-5 items-center justify-between mt-5">
        <Home_Left/>
        <Home_Right/>
      </div>
      <div id="profile" className="w-full flex justify-between">
        <RightData />
        <LeftData />
      </div>
    </main>
  );
}
