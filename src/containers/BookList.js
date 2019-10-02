import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  displayBooks = () => {
    return this.props.books.map(book => (
      <Book
        book={book}
        key={book.id}
        handleClick={() => this.props.addToShelf(book.id)}
      />
    ));
  };

  render() {
    // console.log("Book list props",this.props)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
