import React from "react";

const Book = props => {
console.log(props)

  return (
    <div>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} onClick={props.handleClick}/>

    </div>
  );
};

export default Book;
