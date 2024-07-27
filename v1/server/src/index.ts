import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { prodeRoutes } from "./routes/prode";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (_: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 
app.use(express.json());
app.use('/api', prodeRoutes);

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});