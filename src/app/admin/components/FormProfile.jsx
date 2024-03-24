"use client";
import Button from "@/components/Basic/Button";
import InputField from "@/components/Basic/InputField";
import { ProfileContext } from "@/providers/ContextProvider";
import { useRouter } from "next/navigation";
import { useContext, useReducer } from "react";
import { toast } from "react-toastify";

const FormProfile = () => {
  const { profile } = useContext(ProfileContext);

  const router = useRouter();

  const initialState = {
    name: "",
    email: "",
    tagLine: "",
    footerLine: "",
    role: "",
    experience: "",
    facebook: "",
    instagram: "",
    discord: "",
    github: "",
    linkedin: "",
    skill: [{
      skillName: "",
      skillIcon: "",
      skillProgress: "",
      X: "",
      Y: "",
    }],
  };

  const profileReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FIELD":
        return {
          ...state,
          [action.field]: action.value,
          skill: state.skill
            ? {
                ...state.skill,
                [action.field]: action.value,
              }
            : null,
        };

        case "ADD_SKILL":
          return{
            ...state,
            skill: [...state.skill, action.newSkillField]
          }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const addSkill = () => {
    console.log("Adding skill");
    let newSkillField = {
      skillName: "",
      skillIcon: "",
      skillProgress: "",
      X: "",
      Y: "",
    };
    console.log(state)
    dispatch({ type: "ADD_SKILL", newSkillField})
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
      skill: { skillName, skillIcon, skillProgress, X, Y },
    } = state;
    console.log(state);

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
          skill: {
            skillName,
            skillIcon,
            skillProgress,
            X,
            Y,
          },
        }),
      });
      if (res.ok) {
        toast.success("Profile Updated");
        router.push("/admin");
      } else {
        throw new Error("Failed to create profile");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <h1 className="text-end text-2xl mb-10">Profile Information</h1>
      <div className="grid grid-cols-2 w-full gap-x-10">
        <InputField
          structure={false}
          inputWidth={false}
          label="Name"
          type="text"
          name="name"
          icon="mingcute:user-2-fill"
          value={state?.name}
          onChange={handleChange}
        />
        <InputField
          structure={false}
          inputWidth={false}
          label="Email"
          type="email"
          name="email"
          icon="dashicons:email-alt"
          value={state?.email}
          onChange={handleChange}
        />
        <InputField
          label="Tagline"
          type="text"
          name="tagLine"
          icon="mdi:tag"
          value={state?.tagLine}
          onChange={handleChange}
        />
        <InputField
          label="Footer"
          type="text"
          name="footerLine"
          icon="fluent:document-footer-20-filled"
          value={state?.footerLine}
          onChange={handleChange}
        />
        <InputField
          label="Role"
          type="text"
          name="role"
          icon="carbon:user-role"
          value={state?.role}
          onChange={handleChange}
        />
        <InputField
          label="Experience"
          type="number"
          name="experience"
          icon="solar:explicit-bold"
          value={state?.experience}
          onChange={handleChange}
        />
        <InputField
          label="Instagram"
          type="text"
          name="instagram"
          icon="mdi:instagram"
          value={state?.instagram}
          onChange={handleChange}
        />
        <InputField
          label="Facebook"
          type="text"
          name="facebook"
          icon="uil:facebook"
          value={state?.facebook}
          onChange={handleChange}
        />
        <InputField
          label="Discord"
          type="text"
          name="discord"
          icon="ic:baseline-discord"
          value={state?.discord}
          onChange={handleChange}
        />
        <InputField
          label="Github"
          type="text"
          name="github"
          icon="bi:github"
          value={state?.github}
          onChange={handleChange}
        />
        <InputField
          label="LinkedIn"
          type="text"
          name="linkedin"
          icon="mdi:linkedin"
          value={state?.linkedin}
          onChange={handleChange}
        />
      </div>

      <div className="font-medium flex flex-col-reverse w-full h-full gap-0">
        <div className="flex gap-2 items-center justify-center">
          <button
            type="button"
            className="bg-blue-800 text-sm px-3 py-2 rounded-md"
            onClick={() => addSkill()}
          >
            Add Skill
          </button>
        </div>

        <div className="relative  mb-2 w-full rounded-lg overflow-hidden flex gap-5">
          <div className="w-full grid grid-cols-5 gap-x-2">
            <InputField
              structure={false}
              inputWidth={false}
              label="Skill"
              type="text"
              name="skillName"
              icon="ic:round-drive-file-rename-outline"
              value={state.skill.skillName}
              onChange={handleChange}
            />
            <InputField
              structure={false}
              inputWidth={false}
              label="Icon"
              type="text"
              name="skillIcon"
              icon="tdesign:file-icon"
              value={state.skill.skillIcon}
              onChange={handleChange}
            />
            <InputField
              structure={false}
              inputWidth={false}
              label="Progress"
              type="number"
              name="skillProgress"
              icon="carbon:in-progress"
              value={state.skill.skillProgress}
              onChange={handleChange}
            />
            <InputField
              structure={false}
              inputWidth={false}
              label="X-coordinates"
              type="number"
              name="X"
              icon="iconoir:x-coordinate"
              value={state.skill.X}
              onChange={handleChange}
            />
            <InputField
              structure={false}
              inputWidth={false}
              label="Y-coordinates"
              type="number"
              name="Y"
              icon="iconoir:y-coordinate"
              value={state.skill.Y}
              onChange={handleChange}
            />
            {/* <button
              type="button"
              className="bg-red-500 w-max px-3 py-2 rounded-md h-max flex flex-col items-center justify-center"
            >
              <iconify-icon icon="material-symbols:delete"></iconify-icon>
            </button> */}
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
