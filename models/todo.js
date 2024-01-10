import { Schema, model } from "mongoose";
import { handleSaveError, handleUpdateValidate } from "./hooks.js";
import { statusTodo } from "../constants/constants.js";

const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    status: {
      type: String,
      required: true,
      enum: statusTodo,
      default: "progress",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

todoSchema.pre("findOneAndUpdate", handleUpdateValidate);
todoSchema.post("save", handleSaveError);
todoSchema.post("findOneAndUpdate", handleSaveError);

const Todo = model("todo", todoSchema);

export default Todo;
