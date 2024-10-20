"use-client";
import Button from "@/components/Basic/Button";
import Typewriter from "typewriter-effect";

const AboutMeTab = () => {
  return (
    <div className="w-full flex flex-col space-y-5">
      <h1 className="tektur-regular text-darkPurple text-3xl md:text-4xl font-bold capitalize">
        Turning Vision into Reality with Design & Code
      </h1>
      <div className="text-light text-justify">
        Hello there! I'm{" "}
        <h1 className="tektur-regular text-darkPurple font-medium text-3xl">
          <Typewriter
            options={{
              loop: true,
              startDelay: 1000,
              typeSpeed: 1000,
              deleteSpeed: 1000,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Rijan Maharjan")
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
          />
        </h1>
        <br />A passionate frontend developer weaving digital magic through
        lines of code. As you step into my digital realm, you'll discover a
        fusion of design and functionality that brings web experiences to life.
        With a keen eye for aesthetics and a love for clean, user-friendly
        interfaces, I specialize in crafting visually stunning and intuitively
        responsive websites.
      </div>
      <div className="flex gap-1">
        <Button text="Download CV" />
      </div>
    </div>
  );
};

export default AboutMeTab;
