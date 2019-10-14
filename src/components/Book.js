import React from "react";

const Book = props => {
  return (
    <div className="card" onClick={()=>props.addBook ? props.addBook(props.book) : props.removeItem(props.book)} >


      <h2> {props.book.title}</h2>
     <img src={props.book.img} alt="book" />
    </div>
  );
};

export default Book;

