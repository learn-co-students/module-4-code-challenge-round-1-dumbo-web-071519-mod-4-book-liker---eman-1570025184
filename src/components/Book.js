import React from "react";

const Book = props => {

  const shelfHandler = (bookObject) => {
    props.addBook(bookObject)
  }

  return (
    <div>
      <h2 onClick={ () => shelfHandler(props) }>{ props.title }</h2>
      <img src={ props.image }/>
    </div>
  );
};

export default Book;
