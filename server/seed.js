const mongoose = require("mongoose");
const Book = require("./models/book");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Book.create([
    {
      title: "Harry Potter",
      author: "J.K Rowling",
      status: false,
    },
    {
      title: "Limitless",
      author: "Jim Kwik",
      status: true,
    },
    {
      title: "How to Develop Self Confidence",
      author: "Dale Carnegie",
      status: false,
    },
  ]);

  mongoose.disconnect();
}

seed();
