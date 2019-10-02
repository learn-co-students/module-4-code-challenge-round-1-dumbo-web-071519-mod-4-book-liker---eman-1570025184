import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  
  const shelvedBooks = (props.bookshelf.map((book) => {
    return <Book book={book} key={book.id} handleBookShelfClick={props.handleBookShelfClick} />
  })
  )

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{shelvedBooks}</ul>
    </div>
  );
};

export default Bookshelf;
