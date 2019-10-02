import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const renderBook = () => {
    console.log(props.shelf)

    // props.shelf.map(single => {
    //   return <Book title={single.title} image={single.image} bookId={single.id} removeBook={single.removeBook} />
    // }) 

    // Here is where I messed up and I know it's something simple, I just need to use the SAME function
    // to take it on and off of the render list from state, it can be a simple on/off logic switch

  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{ renderBook() }</ul>
    </div>
  );
};

export default Bookshelf;
