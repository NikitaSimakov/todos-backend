import { HttpError } from "../helpers/HttpError.js";
import Todo from "../models/todo.js";

export const getTodosList = async (req, res) => {
  const { _id: owner } = req.user;
  const response = await Todo.find(
    { owner },
    "-createdAt -updatedAt -owner -token"
  );
  res.json(response);
};

export const postNewTodo = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Todo.create({ ...req.body, owner });
  res.json(result);
};

export const deleteTodo = async (req, res) => {
  const id = req.params.todoId;
  const removing = await Todo.deleteOne({ _id: id });
  if (!removing) return HttpError(404, "Not found");
  return res.json({ message: `Todo with id ${id} is deleted` });
};

export const updateTodo = async (req, res) => {
  const id = req.params.todoId;

  const updatedTodo = await Todo.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  if (!updatedTodo) return HttpError(404, "Not found");
  return res.json(updatedTodo);
};
export const updateStatusTodo = async (req, res) => {
  const id = req.params.todoId;
  const updatedStatus = await Todo.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedStatus) return HttpError(404, "Not found");
  return res.json(updatedStatus);
};
