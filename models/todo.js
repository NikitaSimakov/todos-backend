import { Schema, model } from "mongoose";
import { handleSaveError } from "./hooks.js";

const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    status: {
      type: String,
      required: true,
      enum: ["done", "progress", "pending"],
      default: "progress",
    },
  },
  { versionKey: false, timestamps: true }
);

todoSchema.post("save", handleSaveError);

const Todo = model("todo", todoSchema);

export default Todo;
