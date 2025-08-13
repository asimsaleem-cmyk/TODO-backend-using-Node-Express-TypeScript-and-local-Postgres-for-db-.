import { Router } from "express";
import { fetchTodos, addTodo, editTodo, removeTodo } from "./todos.controllers";

const router = Router();

router.get("/todos", fetchTodos); // GET all
router.post("/todos", addTodo); // POST create
router.put("/todos/:id", editTodo); // PUT update
router.delete("/todos/:id", removeTodo); // DELETE remove

export default router;
