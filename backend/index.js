import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome to bookstore.");
});

//////////////////////////////
// route for save a new book
app.post("/books", async (req, res) => {

  const { title, author, year } = req.body;

  try {
    if (!title && !author && !year) {
      return (
        res.status(400).send({ message: "All fields are required." })
      )
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({message:"Server Error"});
  }
});


////////////////////////////
// mongoose connect here ///
mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("Connected to MongoDB.");
    // 
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  })
  .catch((error) => {
    console.log(error);
  })
