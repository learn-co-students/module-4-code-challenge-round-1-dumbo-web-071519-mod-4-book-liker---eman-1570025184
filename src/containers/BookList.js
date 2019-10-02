import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  constructor() {
    super()
    this.state = { books: [] }
  }

  componentDidMount() {
    let books = [];

    fetch()
      .then(response => response.json())
      .then(data => {
        this.setState({ books: data })
      })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <Book />
        <ul>{
          this.state.books.map(book => {
            return <li key={`book-${book.id}`}>{book.name}</li>
          })}}
          </ul>
      </div>
    );
  }
}

export default BookList;
