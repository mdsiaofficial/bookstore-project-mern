import express from "express";
import { PORT, mongodb_url } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/book.models.js";

const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//   console.log("header : - ", req.header);
//   console.log("body : - ", req.body);
//   console.log("query : - ", req.query);
//   console.log("url : - ", req.url);
//   console.log("baseUrl : - ", req.baseUrl);
//   console.log("method : - ", req.method);
//   console.log("cookies : - ", req.cookies);
//   console.log("params : - ", req.params);
//   // res.status(201).send(req);
//   res.status(201).json({ message: "OK" });
// });

// app.post("/", (req, res) => {
//   console.log("header : - ", req.header);
//   console.log("body : - ", req.body);
//   console.log("query : - ", req.query);
//   console.log("url : - ", req.url);
//   console.log("baseUrl : - ", req.baseUrl);
//   console.log("method : - ", req.method);
//   console.log("cookies : - ", req.cookies);
//   console.log("params : - ", req.params);
//   // res.status(201).send(req);
//   res.status(201).cookie("auth", "fdasgsfdhrts54dfgdgt54").json({ message: "OK" });
// });

// routes
app.get("/", (req, res) => {
  return res.status(201).json({ message: "OK" });
});
app.post("/books", async (req, res) => {
  console.log(req.body);
  const { title, author, publishYear } = req.body;

  try {
    if (!title && !author && !publishYear) {
      return res.status(400).send({ message: "All fields are required." });
    }

    // create new
    const newBook = { title, author, publishYear };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
    
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
  
});

// get all books
app.get("/books", async (req, res) => {
  
  try {
    const books = await Book.find();
    return res.status(200).json({ count: books.length, data: books });

  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// get one book
app.get("/books/:id", async (req, res) => {
  
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// update one book
app.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, publishYear } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(id, req.body);

    if (!book) return res.status(404).json({ message: "Book not found." });

    return res.status(200).json({ message: "book updated", data: book });
    
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// update one book
app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Book.findOneAndDelete({ _id: id });

    

    return res.status(200).json({ message: "book deleted" });
    
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});

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