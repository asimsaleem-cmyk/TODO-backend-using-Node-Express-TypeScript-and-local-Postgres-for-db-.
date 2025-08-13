import express from "express";
import todoRoutes from "./todos.routes";

const app = express();
app.use(express.json());
app.use(todoRoutes);

export default app;
