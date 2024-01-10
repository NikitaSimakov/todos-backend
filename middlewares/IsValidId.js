import { isValidObjectId } from "mongoose";
import { HttpError } from "../helpers/HttpError.js";

export const isValidId = (req, res, next) => {
  const { todoId } = req.params;
  if (!isValidObjectId(todoId))
    next(HttpError(400, `${todoId} is not valid id`));
  next();
};
