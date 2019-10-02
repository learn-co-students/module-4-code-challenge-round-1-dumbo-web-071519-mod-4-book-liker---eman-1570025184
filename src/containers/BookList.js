import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";
import Bookshelf from "./Bookshelf";

class BookList extends Component {

  constructor(){
    super()
    this.state = {
      bookclicked : []
    }
  }

  handleClick = (arg) => {
    this.setState({bookclicked : arg})
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.props.books.map((book,i) => 
              <Book book={book} key={i} handleClick={this.handleClick}/>
              
          )}
          
          </ul>
          <Bookshelf book = {this.state.bookclicked}/>
      </div>
    );
  }
}

export default BookList;
