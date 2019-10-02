import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  oneBook=()=>{
    return this.props.books.map(book => <Book key={book.id} book={book} clickHendler={this.props.clickHendler}/>)
  }
  render() {
    console.log(this.props)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form submitHendler={this.props.submitHendler}/>
        <ul>{this.oneBook()}</ul>
      </div>
    );
  }
}

export default BookList;
