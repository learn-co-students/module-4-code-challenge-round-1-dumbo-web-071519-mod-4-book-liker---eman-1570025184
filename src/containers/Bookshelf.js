import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {


  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.allbooksArr.map((bookinfo)=>{
        return(
          <li >
            <Book bookinfo={ bookinfo} handleOnBookClick={props.handleOnBookClick} />
          </li>
        )
      })}</ul>
    </div>
  );
};

export default Bookshelf;
