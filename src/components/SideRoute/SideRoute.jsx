"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const MotionLink = motion(Link);

const RouteLink = ({ href, icon, tooltip }) => {
  return (
    <MotionLink href={href} className="group relative bg-darkPurple text-white py-1.5 px-2"
    whileHover={{
      scale: 1.1
    }}>
      <iconify-icon icon={icon} width="24px"></iconify-icon>
    </MotionLink>
  );
};

const SideRoute = () => {
  return (
    <div className="fixed z-10 top-1/2 right-0 -translate-y-1/2 cursor-pointer">
      <div className="flex flex-col gap-0.5">
        <RouteLink href="#home" icon="ion:home" tooltip="Home"/>
        <RouteLink href="#profile" icon="raphael:user" tooltip="User-Info"/>
        <RouteLink href="#" icon="material-symbols:work-update" tooltip="Projects"/>
        <RouteLink href="#" icon="uiw:mail" tooltip="Contact"/>
      </div>
    </div>
  );
};

export default SideRoute;
