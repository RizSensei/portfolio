"use client";
import Button from "@/components/Basic/Button";
import InputField from "@/components/Basic/InputField";
import { ProfileContext } from "@/providers/ContextProvider";
import { useRouter } from "next/navigation";
import React, { useContext, useReducer } from "react";
import { toast } from "react-toastify";

const FormProfile = () => {
  const { profile } = useContext(ProfileContext);

  const router = useRouter();

  const initialState = {
    name: profile?.name || "",
    email: profile?.email || "",
    tagLine: profile?.tagLine || "",
    footerLine: profile?.footerLine || "",
    role: profile?.role || "",
    experience: profile?.experience || "",
    facebook: profile?.facebook || "",
    instagram: profile?.instagram || "",
    discord: profile?.discord || "",
    github: profile?.github || "",
    linkedin: profile?.linkedin || "",
  };

  const profileReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FIELD":
        return {
          ...state,
          [action.field]: action.value,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      tagLine,
      footerLine,
      role,
      experience,
      facebook,
      instagram,
      discord,
      github,
      linkedin,
    } = profile;

    try {
      const res = await fetch("http://localhost:3000/api/profile", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          tagLine,
          footerLine,
          role,
          experience,
          facebook,
          instagram,
          discord,
          github,
          linkedin,
        }),
      });
      if (res.ok) {
        toast.success("Profile Updated");
        router.push("/admin");
      } else {
        throw new Error("Failed to create profile");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <h1 className="text-end text-2xl mb-10">Profile Information</h1>
      <InputField
        label="Name"
        type="text"
        name="name"
        icon="mingcute:user-2-fill"
        value={profile?.name}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        icon="dashicons:email-alt"
        value={profile?.email}
        onChange={handleChange}
      />
      <InputField
        label="Tagline"
        type="text"
        name="tagLine"
        icon="mdi:tag"
        value={profile?.tagLine}
        onChange={handleChange}
      />
      <InputField
        label="Footer"
        type="text"
        name="footerLine"
        icon="fluent:document-footer-20-filled"
        value={profile?.footerLine}
        onChange={handleChange}
      />
      <InputField
        label="Role"
        type="text"
        name="role"
        icon="carbon:user-role"
        value={profile?.role}
        onChange={handleChange}
      />
      <InputField
        label="Experience"
        type="integer"
        name="experience"
        icon="solar:explicit-bold"
        value={profile?.experience}
        onChange={handleChange}
      />
      <InputField
        label="Instagram"
        type="text"
        name="instagram"
        icon="mdi:instagram"
        value={profile?.instagram}
        onChange={handleChange}
      />
      <InputField
        label="Facebook"
        type="text"
        name="facebook"
        icon="uil:facebook"
        value={profile?.facebook}
        onChange={handleChange}
      />
      <InputField
        label="Discord"
        type="text"
        name="discord"
        icon="ic:baseline-discord"
        value={profile?.discord}
        onChange={handleChange}
      />
      <InputField
        label="Github"
        type="text"
        name="github"
        icon="bi:github"
        value={profile?.github}
        onChange={handleChange}
      />
      <InputField
        label="LinkedIn"
        type="text"
        name="linkedin"
        icon="mdi:linkedin"
        value={profile?.linkedin}
        onChange={handleChange}
      />
      <div className="font-medium flex flex-col lg:flex-row h-full lg:justify-between lg:items-center lg:gap-5">
        <label
          htmlFor="input-group"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Skills
        </label>
        <div className="relative mb-4 w-full lg:w-3/5 rounded-lg overflow-hidden flex gap-5">
          <input
            type="button"
            value="1"
            className="bg-darkPurple w-max px-3 py-1 rounded-md"
          />
          <div className="w-full grid grid-cols-3 gap-x-2">
            <InputField
            structure={false}
            inputWidth={false}
              label="Skill name"
              type="text"
              name="skill-name"
              icon="ic:round-drive-file-rename-outline"
              // value={profile?.linkedin}
              // onChange={handleChange}
            />
            <InputField
            structure={false}
            inputWidth={false}
              label="Skill icon"
              type="text"
              name="skill-icon"
              icon="tdesign:file-icon"
              // value={profile?.linkedin}
              // onChange={handleChange}
            />
            <InputField
            structure={false}
            inputWidth={false}
              label="Skill progress"
              type="text"
              name="skill-progress"
              icon="carbon:in-progress"
              // value={profile?.linkedin}
              // onChange={handleChange}
            />
            <InputField
            structure={false}
            inputWidth={false}
              label="X-coordinates"
              type="number"
              name="X-coordinates"
              icon="iconoir:x-coordinate"
              // value={profile?.linkedin}
              // onChange={handleChange}
            />
            <InputField
            structure={false}
            inputWidth={false}
              label="Y-coordinates"
              type="number"
              name="Y-coordinates"
              icon="iconoir:y-coordinate"
              // value={profile?.linkedin}
              // onChange={handleChange}
            />
            <button
            className="bg-red-500 w-max px-3 py-2 rounded-md h-max flex flex-col items-center justify-center"
          >
            <iconify-icon icon="material-symbols:delete"></iconify-icon>
          </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button text="Save" />
      </div>
    </form>
  );
};

export default FormProfile;
