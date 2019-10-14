import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    displayedBooks: [],
    portfolioBooks: []
  }


  addBook = (theBook) => {
    console.log('test')
        if (this.state.portfolioBooks.includes(theBook)) {
          console.log(theBook);
        } else {
    this.setState({
              portfolioBooks: [...this.state.portfolioBooks, theBook]
          });
        }
      };

removeItem = (book) => {
            const newShelf = this.state.portfolioBooks.filter(
      s => s.id !== book.id
      );
      this.setState({
      portfolioBooks: newShelf
      });
      };



  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(data => this.setState({
      books: data,
      displayedBooks: data,
      portfolioBooks: []
    }))
  }




  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.displayedBooks} 
        addBook={this.addBook}/>
        <Bookshelf books={this.state.portfolioBooks} removeItem={this.removeItem}/>
      </div>
    );
  }
}

export default App;
