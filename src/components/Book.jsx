function Book() {
  return (
    <main>
      <div className="book-details">
        <div className="book-details-upper">
          <h1>Title</h1>
          <img
            className="image-cover-index"
            src={`/images/imageUrl`}
            alt={`title cover`}
            loading="lazy"
          />
        </div>
        <div className="book-details-lower">
          <p>Author: </p>
          <p>Publisher: </p>
          <p>Genre: </p>
          <p>Pages: </p>
          <p>Rating: </p>
          <p>Synopsis: </p>
          <div>
            <button className="button-blue">UPDATE</button>
            <button className="button-red">DELETE</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Book;
