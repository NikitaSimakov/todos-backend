import Todo from "../models/todo.js";

export const getTodosList = async (req, res) => {
  const response = await Todo.find();
  res.json(response);
};

export const postNewTodo = async (req, res) => {
  const result = await Todo.create(req.body);
  res.json(result);
};

export const deleteTodo = async (req, res) => {
  const id = req.params.todoId;
};

export const updateTodo = async (req, res) => {
  const id = req.params.todoId;
};
export const updateStatusTodo = async (req, res) => {
  const id = req.params.todoId;
};
