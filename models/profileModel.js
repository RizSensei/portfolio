import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    tagLine: {
      type: String,
      // required: true,
    },
    footerLine: {
      type: String,
      // required: true,
    },
    role: {
      type: String,
      // required: true,
    },
    experience: {
      type: Number,
      // required: true,
    },
    facebook: {
      type: String,
      // required: true,
    },
    instagram: {
      type: String,
      // required: true,
    },
    discord: {
      type: String,
      // required: true,
    },
    github: {
      type: String,
      // required: true,
    },
    linkedin: {
      type: String,
      // required: true,
    },
    skill: {
      skillName:{
        type: String,
        // required: true
      },
      skillIcon:{
        type: String,
        // required: true
      },
      skillProgress:{
        type: Number,
        // required: true
      },
      X:{
        type: Number,
        // required: true
      },
      Y:{
        type: Number,
        // required: true
      },
    }
  },
  {
    timestamps: true,
  }
);

const profileModel =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);

export default profileModel;
