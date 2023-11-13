import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBook();
  }, []);

  async function getBook() {
    const API = `http://localhost:8080/books`;
    const res = await axios.get(API);
    setBooks(res.data);
  }

  return (
    <>
      <h1>Books</h1>
      <h2>List of Books</h2>
      {books.map((book) => {
        return (
          <div key={book._id}>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p>Read: {book.status ? "✅" : "😡"}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
