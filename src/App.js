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

  componentDidMount(){
    fetch('http://localhost:3005/books')
      .then(res => res.json())
      .then(bookObjs => this.setState({
        books: bookObjs
      }))
  }
  addBooksToShelf=(book)=>{
    this.setState({
      bookShelf: [...this.state.bookShelf, book]
    })
  }
  removeBooksFromShelf = (book) => {
    let newArr = this.state.bookShelf.filter(el=>el.id!==book.id)
    
    this.setState({
      bookShelf: newArr
    })
  }
  render() {
    console.log(this.state.books)
    return (
      <div className="book-container">
        <BookList clickHendler={this.addBooksToShelf} books={this.state.books}/>
        <Bookshelf clickHendler={this.removeBooksFromShelf} books={this.state.bookShelf}/>
      </div>
    );
  }
}

export default App;
