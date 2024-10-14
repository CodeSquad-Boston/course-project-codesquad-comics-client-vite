import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Book() {
  const [book, setBook] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { bookId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/books/${bookId}`)
      .then((response) => response.json())
      .then((result) => {
        setBook(result.data.book);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [bookId]);

  const handleDeleteBook = (bookId) => {
    const confirm = window.confirm("Delete item?");

    if (!confirm) {
      return;
    }

    fetch(`${API_BASE_URL}/api/books/delete/${bookId}`, {
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
      {isLoading && <p>Loading....</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <div className="book-details">
          <div className="book-details-upper">
            <h1>{book.title}</h1>
            <img
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
              <button
                className="button-blue"
                onClick={() => navigate(`/books/${book._id}/update`)}
              >
                UPDATE
              </button>
              <button
                className="button-red"
                onClick={() => handleDeleteBook(book._id)}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Book;
