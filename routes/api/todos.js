import express from "express";
import {
  deleteTodo,
  getTodosList,
  postNewTodo,
  updateStatusTodo,
  updateTodo,
} from "../../controllers/todos.js";
import { ctrlWrapper } from "../../decorators/ctrlWrapper.js";
import { validateBody } from "../../middlewares/validateBody.js";
import { schemaAddTodo } from "../../schemas/todos-schemas.js";
import { isValidId } from "../../middlewares/IsValidId.js";

export const todosRouter = express.Router();

todosRouter.get("/", ctrlWrapper(getTodosList));

todosRouter.post("/", validateBody(schemaAddTodo), ctrlWrapper(postNewTodo));

todosRouter.delete("/:todosId", isValidId, deleteTodo);

todosRouter.put("/:todosId", isValidId, updateTodo);

todosRouter.patch("/:todosId", isValidId, updateStatusTodo);
