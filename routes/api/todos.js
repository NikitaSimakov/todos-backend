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
import {
  schemaAddTodo,
  schemaUpdateTodoStatus,
} from "../../schemas/todos-schemas.js";
import { isValidId } from "../../middlewares/IsValidId.js";
import { authenticate } from "../../middlewares/authenticate.js";

export const todosRouter = express.Router();

todosRouter.use(authenticate);

todosRouter.get("/", ctrlWrapper(getTodosList));

todosRouter.post("/", validateBody(schemaAddTodo), ctrlWrapper(postNewTodo));

todosRouter.delete(
  "/:todoId",
  validateBody(schemaAddTodo),
  isValidId,
  ctrlWrapper(deleteTodo)
);

todosRouter.put(
  "/:todoId",
  isValidId,
  validateBody(schemaAddTodo),
  ctrlWrapper(updateTodo)
);

todosRouter.patch(
  "/:todoId",
  isValidId,
  validateBody(schemaUpdateTodoStatus),
  ctrlWrapper(updateStatusTodo)
);
