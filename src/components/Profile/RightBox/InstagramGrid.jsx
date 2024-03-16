import Bento from "@/components/Basic/Bento";
import Button from "@/components/Basic/Button";
import CustomSocialLink from "@/components/Basic/CustomSocialLink";
import React from "react";

const InstagramGrid = () => {
  const letters = ["R", "I", "Z", "M"];
  return (
    <div className="w-full flex items-center justify-between py-2">
      <div className="flex flex-col gap-5 justify-between text-start">
        <div className="flex flex-col">
          <CustomSocialLink
            href="#"
            icon="skill-icons:instagram"
            tooltip="Instagram"
          />
          <h1 className="text-white text-sm font-normal">@en_riz101</h1>
        </div>
        <div>
          <Button text="Follow" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1">
        {letters.map((letter, i) => {
          return <Bento key={i} bgColor={false}>{letter}</Bento>;
        })}
      </div>
    </div>
  );
};

export default InstagramGrid;
