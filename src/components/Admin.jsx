import { useEffect, useState } from "react";

import booksData from "../data/books";

const Admin = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div className="container-content">
      <h1>ADMIN PAGE</h1>
      <div className="button-container-center">
        <button className="button-yellow">ADD NEW COMIC</button>
      </div>
      <br /> <br />
      <table className="table-container">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Rating</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.rating}</td>
              <td>
                <button className="button-blue">UPDATE</button>
              </td>
              <td>
                <button className="button-yellow">DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
