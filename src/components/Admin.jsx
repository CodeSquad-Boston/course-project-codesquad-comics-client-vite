import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import booksData from "../data/books";

const Admin = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/books", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        setBooks(result.data.books);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  const handleDeleteBook = (bookId) => {
    const confirm = window.confirm("Delete item?");

    if (!confirm) {
      return;
    }

    fetch(`http://localhost:8080/api/books/delete/${bookId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("result :>> ", result);
        window.location.reload();
      })
      .catch((error) => console.log("error :>> ", error));
  };

  return (
    <main>
      <div className="container-content">
        <h1>ADMIN PAGE</h1>

        {isLoading && <p>Loading...</p>}

        {error && <p>There is an error: {error}</p>}

        {!isLoading && !error && (
          <>
            <div className="button-container-center">
              <button
                className="button-add"
                onClick={() => navigate("/create")}
              >
                ADD NEW COMIC
              </button>
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
                    <td>
                      <Link to={`/books/${book._id}`}>{book.title}</Link>
                    </td>
                    <td>{book.author}</td>
                    <td>{book.rating}</td>
                    <td>
                      <button
                        className="button-blue"
                        onClick={() => navigate(`/books/${book._id}/update`)}
                      >
                        UPDATE
                      </button>
                    </td>
                    <td>
                      <button
                        className="button-red"
                        onClick={() => handleDeleteBook(book._id)}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </main>
  );
};

export default Admin;
