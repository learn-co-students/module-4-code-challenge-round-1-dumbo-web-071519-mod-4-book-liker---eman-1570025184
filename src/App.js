import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookshelf: []
  }

  componentDidMount(){
    fetch(`http://localhost:3005/books`)
    .then(res => res.json())
    .then( data => this.addBooksToState(data))
  }

  addBooksToState = (data) => {
    this.setState({
      books: data
    })
  }

  handleBookListClick = (book) => {
    console.log("a book list was clicked")
    if (!this.state.bookshelf.includes(book)) {
      this.setState({
        bookshelf: [...this.state.bookshelf, book]
      })
    }
  }

  handleSubmit = (event, book) => {
    event.preventDefault()
    this.setState({
      books: [book, ...this.state.books]
    })
    event.target.reset()
  }

  handleBookShelfClick = (bookObj) => {
    console.log("a bookshelf was clicked")
    const stateCopy = [...this.state.bookshelf]
    let newState = stateCopy.filter((book) => book.id !== bookObj.id)

    this.setState({
      bookshelf: newState
    })
  }


  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleBookListClick={this.handleBookListClick} handleSubmit={this.handleSubmit}/>
        <Bookshelf bookshelf={this.state.bookshelf} handleBookShelfClick={this.handleBookShelfClick}/>
      </div>
    );
  }
}

export default App;
