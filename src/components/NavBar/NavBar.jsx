"use client";
import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";
import "../../../public/css/style.css"

const CustomLink = ({ href, title, className }) => {
  // const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[2px] left-0 -bottom-0 5 inline-block w-0 bg-dark absolute group-hover:w-full transiiton-[width] ease duration-300
      `}>&nbsp;</span>
    </Link>
  );
};

const CustomSocialLink = ({ href, icon, tooltip }) => {
  return (
    <Link href={href} target={"_blank"} className="group relative ">
      <iconify-icon icon={icon} width="24px"></iconify-icon>
      <div
        className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
      >
        {tooltip}
      </div>
    </Link>
  );
};

const CustomLightDarkThemeIcon = ({ image, alt }) => {
  return (
    <button className="w-auto rounded-full">
      <img src={image} alt={alt} className="rounded-full" />
    </button>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-4 font-medium flex justify-between items-center">
      <nav className="tektur-regular space-x-10 ">
        <CustomLink href="/" title="Home" className="mx-4"/>
        <CustomLink href="/profile" title="Profile" className="mx-4"/>
        <CustomLink href="/projects" title="Projects" className="mx-4"/>
      </nav>
      <Logo />
      <nav className="space-x-5">
        <CustomSocialLink
          href="#"
          icon="skill-icons:github-light"
          tooltip="Github"
        />
        <CustomSocialLink
          href="#"
          icon="skill-icons:twitter"
          tooltip="Twitter"
        />
        <CustomSocialLink
          href="#"
          icon="skill-icons:linkedin"
          tooltip="LinkedIn"
        />
        <CustomSocialLink href="#" icon="logos:facebook" tooltip="Facebook" />
        <CustomSocialLink
          href="#"
          icon="skill-icons:instagram"
          tooltip="Instagram"
        />
        <CustomLightDarkThemeIcon
          image="../../images/icons8-sun.gif"
          alt="Sun Icon"
        />
        <CustomLightDarkThemeIcon
          image="../../images/icons8-night.gif"
          alt="Moon Icon"
        />
      </nav>
    </header>
  );
};

export default NavBar;
