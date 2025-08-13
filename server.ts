import express from "express";
import dotenv from "dotenv";
import router from "./todos.routes";

dotenv.config();
const app = express();

app.use(express.json()); // JSON body parser
app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://localhost:${process.env.PORT || 3000}`);
});
