import { pool } from "./db";

export async function getAllTodos() {
  const result = await pool.query("SELECT * FROM todos ORDER BY id ASC");
  return result.rows;
}

export async function createTodo(title: string) {
  const result = await pool.query(
    "INSERT INTO todos (title, done, created_at) VALUES ($1, $2, NOW()) RETURNING *",
    [title, false]
  );
  return result.rows[0];
}
export async function updateTodo(id: number, title: string) {
  const result = await pool.query(
    "UPDATE todos SET title = $1 WHERE id = $2 RETURNING *",
    [title, id]
  );
  return result.rows[0];
}
export async function deleteTodo(id: number) {
  const result = await pool.query(
    "DELETE FROM todos WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
}
export async function markTodoDone(id: number) {
  const result = await pool.query(
    "UPDATE todos SET done = NOT done WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
}
