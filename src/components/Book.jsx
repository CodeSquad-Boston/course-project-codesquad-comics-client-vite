import { useEffect, useState } from "react";

import booksData from "../data/books";

function Book() {
  const [book, setBook] = useState([]);

  const bookId = "66b62a49-a8de-4914-ab3f-49fe0554c08a";

  useEffect(() => {
    const foundBook = booksData.find((book) => book._id === bookId);
    setBook(foundBook);
  }, [bookId]);

  const handleDeleteBook = () => {
    console.log(`Delete?`);
  };

  return (
    <main>
      <div className="book-details">
        <div className="book-details-upper">
          <h1>{book.title}</h1>
          <img
            className="image-cover-index"
            src={`/images/${book.image}`}
            alt={`${book.title} cover`}
            loading="lazy"
          />
        </div>
        <div className="book-details-lower">
          <p>Author: {book.author}</p>
          <p>Publisher: {book.publisher}</p>
          <p>Genre: {book.genre}</p>
          <p>Pages: {book.pages}</p>
          <p>Rating: {book.rating}</p>
          <p>Synopsis: {book.synopsis}</p>
          <div>
            <button className="button-blue">UPDATE</button>
            <button className="button-red" onClick={handleDeleteBook}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Book;
