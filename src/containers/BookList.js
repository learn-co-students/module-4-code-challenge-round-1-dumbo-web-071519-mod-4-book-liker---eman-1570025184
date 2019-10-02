import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  

  render() {

    const allBooks = this.props.books.map(book => {
      return <Book key={book.id} handleBookListClick={this.props.handleBookListClick} book={book} />
    })

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit}/>
        <ul>{allBooks}</ul>
      </div>
    );
  }
}

export default BookList;
