import Image from "next/image";
import React from "react";
import ProfilePicture from "../../../public/images/profile.png";

const Home_Left = () => {
  return (
    <div className="relative w-60 md:w-[30rem] h-60 md:h-[30rem]">
      <Image
        src={ProfilePicture}
        alt="Profile image"
        loading="eager"
        priority="high"
        className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  z-20"
        style={{
          WebkitFilter: "drop-shadow(5px 5px 5px #fff)",
          filter: "drop-shadow(5px 5px 5px #fff)",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0">
        <div className="w-60 md:w-96 h-60 md:h-96 rounded-full bg-zinc-800 transform animate-moving-liquid" 
        style={{ borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%", 
        WebkitFilter: "drop-shadow(5px 5px 5px #7e22ce)",
        filter: "drop-shadow(5px 5px 5px #7e22ce)" }}></div>
      </div>
    </div>
  );
};

export default Home_Left;
