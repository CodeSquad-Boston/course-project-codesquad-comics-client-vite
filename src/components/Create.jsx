const Create = () => {
  const handleCreateFormSubmit = (e) => {
    e.preventDefault();
    console.log("Create form submitted!");

    console.log(e.target.title.value);
    console.log(e.target.author.value);
    console.log(e.target.publisher.value);
    console.log(e.target.genre.value);
    console.log(e.target.pages.value);
    console.log(e.target.rating.value);
    console.log(e.target.synopsis.value);
  };

  return (
    <div className="container-content">
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
          <select id="publisher" name="publisher" required>
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
    </div>
  );
};

export default Create;
