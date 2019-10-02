import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    allBooks: [],
    bookShelf: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(response => response.json())
    .then(data => this.setState({
      allBooks: data
    }))
  }

  addToBookShelf = (bookObj) => {
    const allbooks = this.state.allBooks

    const thebook = allbooks.find(book => {
      if (book === bookObj){
        book.inShelf = true;

        return book
      }
    })

    this.setState({
      bookShelf: [...this.state.bookShelf, thebook]
    })
  }

  removeFromBookShelf = (book) => {

    let bookShelf = this.state.bookShelf

    let updatedBookShelf = bookShelf.filter(shelfBook => {
      return shelfBook !== book
    })

    this.setState({
      bookShelf: updatedBookShelf
    })
  }

  handler = (book) =>{
    if (book.inShelf === true && this.state.bookShelf.includes(book)) {
      this.removeFromBookShelf(book)
    } else if (this.state.bookShelf.includes(book)) {
      console.log("CAN'T HAVE DUPLICATE BOOKS")
    } else {
      this.addToBookShelf(book)
    }
  }

  render() {
    return (
      <div className="book-container">
        <BookList bookData={this.state.allBooks} addToBookShelf={this.addToBookShelf} handler={this.handler}/>
        <Bookshelf bookData = {this.state.bookShelf} handler={this.handler}/>
      </div>
    );
  }
}

export default App;
