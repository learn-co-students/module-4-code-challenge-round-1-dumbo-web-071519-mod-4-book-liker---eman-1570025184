import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookShelf: []
  }



  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(response => response.json())
    .then(data => this.setState({books: data}))
  }

  addBookToShelf = (bookObject) => {
    this.setState({ bookShelf: bookObject } )
  } 

  removeBookFromShelf = (bookObject) => {
    console.log(bookObject)
  }

  render() {
    console.log(this.state)
    return (
      <div className="book-container">
        <BookList books={ this.state.books } addBook={ this.addBookToShelf } />
        <Bookshelf shelf={ this.state.bookShelf } removeBook={ this.removeBookFromShelf } />
      </div>
    );
  }
}

export default App;
