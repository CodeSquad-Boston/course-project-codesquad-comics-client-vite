import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleCreateFormSubmit = (e) => {
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

    fetch(`http://localhost:8080/api/books/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        navigate(`/admin`);
      })
      .catch((error) => console.log("error :>> ", error))
      .finally(() => setIsLoading(false));
  };

  return (
    <main>
      <div className="form-container">
        <h1>CREATE NEW COMIC</h1>
        <form onSubmit={handleCreateFormSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Author"
              required
            />
          </div>
          <div>
            <label htmlFor="publisher">Publisher:</label>
            <select
              id="publisher"
              name="publisher"
              defaultValue="default"
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
          </div>
          <div>
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
              name="genre"
              placeholder="Genre"
              required
            />
          </div>
          <div>
            <label htmlFor="pages">Number of pages:</label>
            <input
              type="number"
              id="pages"
              name="pages"
              placeholder="i.e. 123"
              required
            />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="0"
              max="5"
              placeholder="i.e. 5"
              required
            />
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis:</label>
            <textarea
              className="text-area-label"
              name="synopsis"
              id="synopsis"
              placeholder="Synopsis"
              required
            />
          </div>
          <div className="button-container-center">
            <button
              type="submit"
              className="button-yellow"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Create;
