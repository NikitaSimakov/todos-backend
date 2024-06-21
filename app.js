import express from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
// import swaggerDocument from "./swagger.json" assert { type: "json" };
import { promises as fs } from 'fs';

import { todosRouter } from "./routes/api/todos.js";
import { authRouter } from "./routes/api/auth.js";

export const app = express();
dotenv.config();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";


async function loadSwaggerDocument() {
  try {
    const data = await fs.readFile('./swagger.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Ошибка при чтении swagger.json:', error);
    throw error;
  }
}

const swaggerDocument = await loadSwaggerDocument();

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/todos", todosRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
