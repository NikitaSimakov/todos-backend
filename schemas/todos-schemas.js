import Joi from "joi";
import { statusTodo } from "../constants/constants.js";

export const schemaAddTodo = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  status: Joi.string()
    .required()
    .valid(...statusTodo),
});

export const schemaUpdateTodo = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
});

export const schemaUpdateTodoStatus = Joi.object({
  status: Joi.string()
    .required()
    .valid(...statusTodo),
});
