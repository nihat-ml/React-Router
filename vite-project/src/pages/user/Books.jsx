import React, { useState, useEffect } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((response) => {
      setBooks(response.data);
    });
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredBooks.map((book) => (
          <div key={book.id} style={{ border: "1px solid #ccc", padding: "20px" }}>
            <img src={book.image} alt={book.title} style={{ width: "150px" }} />
            <h3>{book.title}</h3>
            <button>Info</button>
            <button>❤️</button>
            <button>🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
