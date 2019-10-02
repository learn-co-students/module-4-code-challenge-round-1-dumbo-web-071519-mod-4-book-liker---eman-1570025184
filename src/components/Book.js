import React from "react";

const Book = props => {

  return (
    <div onClick={props.handleBookListClick ? () => props.handleBookListClick(props.book) : () => props.handleBookShelfClick(props.book)}>
      <h2>{props.book.title}</h2>
      <h5>{props.book.author}</h5>
      <img src={props.book.img}/>
    </div>
  );
  
};

export default Book;
