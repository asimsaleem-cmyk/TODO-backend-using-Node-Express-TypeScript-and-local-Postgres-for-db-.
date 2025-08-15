import { Router } from "express";
import {
  fetchTodos,
  addTodo,
  editTodo,
  removeTodo,
  markTodoAsDone,
} from "./todos.controllers";

const router = Router();

router.get("/todos", fetchTodos); // GET all
router.post("/todos", addTodo); // POST create
router.put("/todos/:id", editTodo); // PUT update
router.delete("/todos/:id", removeTodo); // DELETE remove
router.patch("/todos/:id/done", markTodoAsDone); // PATCH mark as done

export default router;

