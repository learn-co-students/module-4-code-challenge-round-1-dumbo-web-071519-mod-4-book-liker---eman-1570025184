import React from "react";

const Book = (props) => {
  return (
    <div onClick={ ()=>props.handleOnBookClick(props.bookinfo.bookdata.id) } >
      <h2>{ props.bookinfo.title }</h2>
      <img alt={ props.bookinfo.bookdata.title} src={ props.bookinfo.bookdata.img } />
    </div>
  );
};

export default Book;
