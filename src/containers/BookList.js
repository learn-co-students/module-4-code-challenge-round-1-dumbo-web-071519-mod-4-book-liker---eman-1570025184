import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {

    const renderBookList = () => {
      return this.props.books.map(single => {
          return <Book title={single.title} image={single.img} addBook={ this.props.addBook } bookId={single.id}/>
      })
    }

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{ renderBookList() }</ul>
      </div>
    );
  }
}

export default BookList;
