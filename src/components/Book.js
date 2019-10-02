import React from "react";

const Book = props => {

 

  return (
    <div onClick={() => props.handleClick(props.book)}>
      <h2>{props.book.title}</h2>
      {<img src={props.book.img} alt="imgalt" />}
    </div>
  );
};

export default Book;
