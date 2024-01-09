import Joi from "joi";

export const schemaAddTodo = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  status: Joi.string().required().valid("done", "progress", "pending"),
});

// title: { type: String, required: true },
//     description: { type: String, default: "" },
//     status: {
//       type: String,
//       required: true,
//       enum: ["done", "progress", "pending"],
//       default: "progress",
//     },
