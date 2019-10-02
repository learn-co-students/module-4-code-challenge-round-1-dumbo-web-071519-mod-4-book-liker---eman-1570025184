import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";


class App extends Component {

  constructor(){
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(resp => resp.json())
      .then(data => this.setState({ books: data }));
  }

 
  
  
  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books}/>
        <Bookshelf />
      </div>
    );
  }
}

export default App;
