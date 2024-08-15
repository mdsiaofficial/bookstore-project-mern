import express from "express";
import { PORT, mongodb_url } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/book.models.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// middleware for parsing request body
app.use(express.json());

// middleware for handling cors
// opt1: allow all cors(*)
app.use(cors());
// opt2: allow custom
// app.use(cors(
//   {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   }
// ));

// routes
app.get("/", (req, res) => {
  return res.status(201).json({ message: "OK" });
});

app.use("/books", booksRoute);

mongoose
  .connect(mongodb_url)
  .then(() => {
    console.log("Application connected to DB.");

    // server connect
    app.listen(process.env.PORT || PORT, () => {
      console.log(`Server is running on 5555`);
    });
  })
  .catch((error) => {
    console.error(error);
  })