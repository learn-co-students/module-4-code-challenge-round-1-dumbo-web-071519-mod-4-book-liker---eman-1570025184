import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  let oneBook = () => {
    return props.books.map(book => <Book key={book.id} book={book} clickHendler={props.clickHendler} />)
  }
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{oneBook()}</ul>
    </div>
  );
};

export default Bookshelf;
