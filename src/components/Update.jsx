import { useEffect, useState } from "react";

import booksData from "../data/books";

const Update = () => {
  const id = "66b62a49-a8de-4914-ab3f-49fe0554c08a";
  const [book, setBook] = useState({});

  useEffect(() => {
    const foundBook = booksData.find((book) => book._id === id);
    setBook(foundBook);
  }, [id]);

  const handleUpdateFormSubmit = (e) => {
    e.preventDefault();

    console.log("Update form submitted!");

    console.log(e.target.title.value);
    console.log(e.target.author.value);
    console.log(e.target.publisher.value);
    console.log(e.target.genre.value);
    console.log(e.target.pages.value);
    console.log(e.target.rating.value);
    console.log(e.target.synopsis.value);
  };

  return (
    <div className="form-container">
      <h1>UPDATE PAGE</h1>
      <form onSubmit={handleUpdateFormSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={book.title}
          required
        />
        <br />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          defaultValue={book.author}
          required
        />
        <br />
        <label htmlFor="publisher">Publisher:</label>
        <select
          id="publisher"
          name="publisher"
          defaultValue={book.publisher}
          required
        >
          <option value="boom-box">BOOM! Box</option>
          <option value="dc-comics">DC Comics</option>
          <option value="harry-n-abrams">Harry N. Abrams</option>
          <option value="icon-books">Icon Books</option>
          <option value="image-comics">Image Comics</option>
          <option value="marvel">Marvel</option>
          <option value="simon-schuster">Simon & Schuster</option>
          <option value="top-shelf-productions">Top Shelf Productions</option>
          <option value="viz-media-llc">VIZ Media LLC</option>
        </select>
        <br />
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          defaultValue={book.genre}
          required
        />
        <br />
        <label htmlFor="pages">Number of pages:</label>
        <input
          type="number"
          id="pages"
          name="pages"
          defaultValue={book.pages}
          required
        />
        <br />
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="0"
          max="5"
          defaultValue={book.rating}
          required
        />
        <br />
        <label htmlFor="synopsis">Synopsis:</label>
        <textarea
          className="text-area-label"
          name="synopsis"
          id="synopsis"
          defaultValue={book.synopsis}
          required
        ></textarea>
        <br />
        <div className="button-container-center">
          <input type="submit" className="button-yellow" />
        </div>
      </form>
    </div>
  );
};

export default Update;
