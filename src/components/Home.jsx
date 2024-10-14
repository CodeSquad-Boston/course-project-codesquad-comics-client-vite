import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import booksData from "../data/books";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/books`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => setBooks(result.data.books))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main>
      <div className="container-content">
        <h1>CODESQUAD COMICS</h1>
        <p>
          CodeSquad Comics is a collection of graphic novels read by Your Name.
          The site is intended to display comic book covers along with
          information about each book, including the author, a rating, and other
          details about the graphic novel. Browse through the complete
          collection below. Click on the cover image or the Details link to see
          even more information for each graphic novel including the publisher,
          genre, number of pages, and a brief synopsis. The About page includes
          meta information about this collection. Login is only available to the
          site administrator at this time.
        </p>
      </div>
      <div className="container-content">
        <h2>COMPLETE COLLECTION</h2>

        {isLoading && <p>Loading...</p>}

        {error && <p>There is an error: {error}</p>}

        {!isLoading && !error && (
          <>
            <div
              className="container-book-rows-index"
              id="container-book-rows-index"
            >
              {books.length &&
                books.map((book) => (
                  <div key={book._id} className="container-single-book-index">
                    <Link to={`/books/${book._id}`}>
                      <img
                        className="image-cover-index"
                        src={`images/${book.image}`}
                        alt={`${book.title} cover`}
                        loading="lazy"
                      />
                    </Link>
                    <p>{book.title}</p>
                    <p>by {book.author}</p>
                    <p>{book.rating} stars</p>
                    <Link to={`/books/${book._id}`}>Details</Link>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
