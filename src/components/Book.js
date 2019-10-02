import React from "react";

const Book = props => {
  return (
    <div onClick={() => { props.clickHendler(props.book)}}>
      <h2>{props.book.title}</h2>
      {props.book.img}
    </div>
  );
};

export default Book;
