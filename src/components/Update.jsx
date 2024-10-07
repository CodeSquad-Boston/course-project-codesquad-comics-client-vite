import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { bookId } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/api/books/${bookId}`)
      .then((response) => response.json())
      .then((result) => {
        console.log("result :>> ", result);
        setBook(result.data.book);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [bookId, navigate]);

  const handleUpdateFormSubmit = (e) => {
    e.preventDefault();

    const body = {
      title: e.target.title.value,
      author: e.target.author.value,
      publisher: e.target.publisher.value,
      genre: e.target.genre.value,
      pages: e.target.pages.value,
      rating: e.target.rating.value,
      synopsis: e.target.synopsis.value,
    };

    setIsLoading(true);

    fetch(`http://localhost:8080/api/books/update/${bookId}`, {
      method: "PUT",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("result :>> ", result);
        navigate("/admin");
      })
      .catch((error) => console.log("error :>> ", error))
      .finally(() => setIsLoading(false));
  };

  console.log("book.publisher :>> ", book.publisher);

  return (
    <div className="form-container">
      <h1>UPDATE PAGE</h1>

      {isLoading && <p>Loading...</p>}

      {error && <p>There is an error: {error}</p>}

      {!isLoading && !error && (
        <>
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
              defaultValue={book.publisher || "default"}
              required
            >
              <option value="default" disabled>
                Select
              </option>
              <option value="BOOM! Box">BOOM! Box</option>
              <option value="DC Comics">DC Comics</option>
              <option value="Harry N. Abrams">Harry N. Abrams</option>
              <option value="Icon Books">Icon Books</option>
              <option value="Image Comics">Image Comics</option>
              <option value="Marvel">Marvel</option>
              <option value="Simon & Schuster">Simon & Schuster</option>
              <option value="Top Shelf Productions">
                Top Shelf Productions
              </option>
              <option value="VIZ Media LLC">VIZ Media LLC</option>
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
              <button
                type="submit"
                className="button-yellow"
                disabled={isLoading}
              >
                {isLoading ? "Updating..." : "Update"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Update;
