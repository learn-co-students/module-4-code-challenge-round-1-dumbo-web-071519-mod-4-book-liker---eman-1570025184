import React from "react";

// function handleClick(id){
//   console.log(id)
// }

const Book = props => {
  
  return (
    <div onClick={() => props.handler(props.bookData)}>
      <h2>{props.bookData.title}</h2>
      <img src={props.bookData.img} alt='To Kill a Mocking Bird Book Cover' />
    </div>
  );
};

export default Book;
