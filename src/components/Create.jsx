import { useNavigate } from "react-router-dom";

const Create = () => {
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
      .catch((error) => console.log("error :>> ", error));
  };

  return (
    <div className="form-container">
      <h1>CREATE NEW COMIC</h1>
      <form onSubmit={handleCreateFormSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          required
        />
        <br />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author"
          required
        />
        <br />
        <label htmlFor="publisher">Publisher:</label>
        <select id="publisher" name="publisher" defaultValue="default" required>
          <option value="default" disabled>
            Select
          </option>
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
          placeholder="Genre"
          required
        />
        <br />
        <label htmlFor="pages">Number of pages:</label>
        <input
          type="number"
          id="pages"
          name="pages"
          placeholder="i.e. 123"
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
          placeholder="i.e. 5"
          required
        />
        <br />
        <label htmlFor="synopsis">Synopsis:</label>
        <textarea
          className="text-area-label"
          name="synopsis"
          id="synopsis"
          placeholder="Synopsis"
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

export default Create;
