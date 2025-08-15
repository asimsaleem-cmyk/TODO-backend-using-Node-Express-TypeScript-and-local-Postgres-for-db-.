import { Request, Response } from "express";
import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  markTodoDone,
} from "./todos.services";

export async function fetchTodos(req: Request, res: Response) {
  const todos = await getAllTodos();
  res.json(todos);
}

export async function addTodo(req: Request, res: Response) {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const todo = await createTodo(title);
  res.status(201).json(todo);
}
// PUT
export async function editTodo(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { title } = req.body;
    console.log("Update request:", id, title);
    if (!title) return res.status(400).json({ error: "Title is required" });

    const updatedTodo = await updateTodo(id, title);
    if (!updatedTodo) return res.status(404).json({ error: "Todo not found" });

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
}

// DELETE
export async function removeTodo(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    console.log("Delete request:", id);
    const deletedTodo = await deleteTodo(id);

    if (!deletedTodo) return res.status(404).json({ error: "Todo not found" });

    res.json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
}
export async function markTodoAsDone(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    console.log("Mark as done request:", id);
    const updatedTodo = await markTodoDone(id);

    if (!updatedTodo) return res.status(404).json({ error: "Todo not found" });

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to mark todo as done" });
  }
}
