import express from "express";
import { Book } from "../models/book.models.js";

const router = express.Router();

// routes
router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
  
  try {
    const books = await Book.find();
    return res.status(200).json({ count: books.length, data: books });

  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// get one book
router.get("/:id", async (req, res) => {
  
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
router.put("/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Book.findOneAndDelete({ _id: id });

    

    return res.status(200).json({ message: "book deleted" });
    
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});

export default router;