import React from "react";
import Book from "../components/Book";


const Bookshelf = props => {
  console.log("Bookshelf props",props)
 const books = props.book.map(book => <Book book={book}  handleClick={()=> props.removeFromShelf(book.id)}/>)

//  ={props.removeFromShelf}

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{books}</ul>
    </div>
  );
};

export default Bookshelf;
