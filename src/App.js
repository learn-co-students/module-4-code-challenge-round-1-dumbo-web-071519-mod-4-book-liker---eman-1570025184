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
    this.getBooks()
  }

  getBooks = () =>{
    fetch(`http://localhost:3005/books`)
      .then(res => res.json())
      .then(data => this.addBooksToState(data))
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

  // this is my inital submit handler without persistence. 
  handleSubmit = (event, book) => {
    event.preventDefault()
    this.setState({
      books: [book, ...this.state.books]
    })
    event.target.reset()
  }

  // this is how i would persist data on submit. Make a POST fetch request to the db with the body being
  // the this.state that i passed up as 'book' in the handleSubmit above 
  handleSubmitPersist = (event, book) => {
    event.preventDefault()
    console.log(book)
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(book)
  }
    fetch(`http://localhost:3005/books`, config).then(res => res.json()).then(data => this.getBooks())
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
        <BookList books={this.state.books} handleBookListClick={this.handleBookListClick} handleSubmitPersist={this.handleSubmitPersist}/>
        <Bookshelf bookshelf={this.state.bookshelf} handleBookShelfClick={this.handleBookShelfClick}/>
      </div>
    );
  }
}

export default App;
