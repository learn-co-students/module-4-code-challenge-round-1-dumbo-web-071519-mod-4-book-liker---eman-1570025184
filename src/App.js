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
    let isExist = this.state.bookShelf.find(el=>el.id===book.id)
    if(isExist){}
    else {
      this.setState({
        bookShelf: [book,...this.state.bookShelf]
      })}
    
  }
  removeBooksFromShelf = (book) => {
    let newArr = this.state.bookShelf.filter(el=>el.id!==book.id)
    
    this.setState({
      bookShelf: newArr
    })
  }

  addBookToBookList=(book)=>{
    
    fetch('http://localhost:3005/books',
    {
      headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: JSON.stringify({
        title: book.title,
        author: book.author,
        img: book.img,
      
    })}
    )
      
    this.setState({
      books: [book,...this.state.books ]
    })
  }
  render() {
    console.log(this.state.books)
    return (
      <div className="book-container">
        <BookList submitHendler={this.addBookToBookList}clickHendler={this.addBooksToShelf} books={this.state.books}/>
        <Bookshelf clickHendler={this.removeBooksFromShelf} books={this.state.bookShelf}/>
      </div>
    );
  }
}

export default App;
