"use client";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import { useEffect, useRef } from "react";
import "../../../public/css/style.css";
import ProfilePicture from "../../../public/images/profile.png";
import Image from "next/image";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function Profile() {
  return (
    <>
      <Head>
        <title>Rizen | Profile</title>
        <meta name="description" content="Description about my profile" />
      </Head>
      <main className="w-full flex">
        <section className="flex flex-col">
          <div className="w-[12rem] h-[12rem]">
            <Image
              src={ProfilePicture}
              alt="Profile image"
              loading="eager"
              priority="high"
              className="w-full h-full object-cover rounded-full border-2 border-gray-200"
              style={{ boxShadow: "0px 0px 20px 20px rgb(107 114 128)" }}
            />
          </div>
          <h1 className="mt-7 text-sm tektur-regular text-darkPurple">Designer | Developer</h1>
          <h1 className="text-2xl tektur-regular">Rijan Maharjan</h1>
          <div className="flex gap-2 text-sm">
            <button className="rounded-xl flex text-white items-center justify-center gap-2 px-4 py-2 bg-black backdrop-blur-md backdrop-brightness-150 border border-gray-500"><i className="fa fa-solid fa-location-dot"></i>Kathmandu</button>
            <button className="rounded-xl flex text-white items-center justify-center gap-2 px-4 py-2 bg-black backdrop-blur-md backdrop-brightness-150 border border-gray-500"><i className="fa fa-solid fa-envelope"></i>Contact Me</button>
          </div>
        </section>

        <aside className="text-3xl font-medium flex flex-col gap-5">
          <div className="text-center">
            <AnimatedNumbers value={2} />
            <p className="text-lg tektur-regular">Months of Experience</p>
          </div>
          <div className="text-center">
            <AnimatedNumbers value={3} />
            <p className="text-lg tektur-regular">Number of Projects</p>
          </div>
        </aside>
      </main>
    </>
  );
}
