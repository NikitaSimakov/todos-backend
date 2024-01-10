import { Schema, model } from "mongoose";
import { emailRegexp } from "../constants/constants.js";
import { handleUpdateValidate, handleSaveError } from "./hooks.js";

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegexp,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

userSchema.pre("findOneAndUpdate", handleUpdateValidate);
userSchema.post("findOneAndUpdate", handleSaveError);
userSchema.post("save", handleSaveError);

export const User = model("user", userSchema);
