import Joi from "joi";
import { emailRegexp } from "../constants/constants.js";

export const userSignUpSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required().pattern(emailRegexp),
  token: Joi.string().default(null),
});

export const userSignInSchema = Joi.object({
  email: Joi.string().required().pattern(emailRegexp),
  password: Joi.string().min(6).required(),
});
