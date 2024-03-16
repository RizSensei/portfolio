import Image from 'next/image'
import React from 'react'
import Bento from '../Basic/Bento'
import GithubGrid from './RightBox/GithubGrid'
import ProfilePicture from "../../../public/images/profile.png";


const LeftData = () => {
  return (
    <section className="mt-10 flex flex-col w-1/3 items-end gap-2">
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
    <h1 className="mt-10 text-sm tektur-regular text-darkPurple">
      Designer | Developer
    </h1>
    <h1 className="text-2xl text-light tektur-regular">Rijan Maharjan</h1>
    <div className="flex gap-2 text-sm">
      <Bento>
        <i className="fa fa-solid fa-location-dot"></i>Kathmandu
      </Bento>
      <Bento>
        <i className="fa fa-solid fa-envelope"></i>Contact Me
      </Bento>
    </div>
    <div className="text-sm">
      <GithubGrid />
    </div>
  </section>
  )
}

export default LeftData