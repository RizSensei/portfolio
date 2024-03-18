import Image from "next/image";
import React from "react";
import Bento from "../Basic/Bento";
import GithubGrid from "./RightBox/GithubGrid";
import ProfilePicture from "../../../public/images/profile.png";
import Marquee from "react-fast-marquee";

const LeftData = () => {
  return (
    <section className="mt-10 flex flex-col w-full md:w-1/3 items-center md:items-end gap-2">
      <div className="w-[12rem] h-[12rem]">
        <Image
          src={ProfilePicture}
          alt="Profile image"
          loading="eager"
          priority="high"
          className="w-full h-full object-cover"
          style={{
            WebkitFilter: "drop-shadow(5px 5px 5px #fff)",
            filter: "drop-shadow(5px 5px 5px #fff)",
          }}
        />
      </div>
      <div className="w-72">
        <Marquee pauseOnHover={true} direction="right">
        <h1 className="mt-10 text-sm tektur-regular text-darkPurple cursor-pointer">
          UI/UX Designer | Frontend Developer
        </h1>
      </Marquee>
      </div>
      
      <h1 className="text-2xl text-light tektur-regular">Rijan Maharjan</h1>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <Bento>
          <iconify-icon icon="ion:location-sharp" height="20px"></iconify-icon>
          Kathmandu
        </Bento>
        <Bento>
          <iconify-icon
            icon="material-symbols-light:contact-mail"
            height="20px"
          ></iconify-icon>
          Contact Me
        </Bento>
        <div className="col-span-2 text-sm w-full">
          <GithubGrid className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default LeftData;
