import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{
        props.bookData.map(book => {
          return <li><Book bookData={book} handler={props.handler} /></li>
        })
        } 
      </ul>
    </div>
  );
};

export default Bookshelf;
