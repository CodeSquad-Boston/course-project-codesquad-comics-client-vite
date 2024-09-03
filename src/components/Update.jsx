const Update = () => {
  return (
    <div className="form-container">
      <h1>UPDATE PAGE</h1>
      <form action="#">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value="" required />
        <br />
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author" value="" required />
        <br />
        <label htmlFor="publisher">Publisher:</label>
        <select id="publisher" name="publisher" required>
          <option value="placeholder" disabled selected>
            Select
          </option>
          <option value="boom-box">BOOM! Box</option>
          <option value="dc-comics">DC Comics</option>
          <option value="harry-n-abrams">Harry N. Abrams</option>
          <option value="icon-books">Icon Books</option>
          <option value="image-comics">Image Comics</option>
          <option value="marvel">Marvel</option>
          <option value="simon-schuster">Simon Schuster</option>
          <option value="simon-schuster">Simon & Schuster</option>
          <option value="top-shelf-productions">Top Shelf Productions</option>
          <option value="viz-media-llc">VIZ Media LLC</option>
        </select>
        <br />
        <label htmlFor="genre">Genre:</label>
        <input type="text" id="genre" name="genre" value="" required />
        <br />
        <label htmlFor="pages">Number of pages:</label>
        <input type="number" id="pages" name="pages" value="" required />
        <br />
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="0"
          max="5"
          value=""
          required
        />
        <br />
        <label htmlFor="synopsis">Synopsis:</label>
        <textarea
          className="text-area-label"
          name="synopsis"
          id="synopsis"
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
