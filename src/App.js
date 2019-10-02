import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form";


class App extends Component {


  state ={
      allBooks:[],
      bookShelf:[]

  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allBooks: data 
      })
    })

  }

addToShelf =(id)=>{
  // console.log("This is ADD", id)
  const chosenBook = this.state.allBooks.find(book => book.id === id)
  if( !this.state.bookShelf.includes(chosenBook)) {this.setState({
    bookShelf: [chosenBook, ...this.state.bookShelf]
  }) }


}

removeFromShelf =(id)=>{
 const remainingBooks = this.state.bookShelf.filter(book=> book.id !==id)

 this.setState({
  bookShelf: remainingBooks
 })

}

addNewBook =(state)=>{
  console.log("From App", state)
  }


  render() {

    // console.log("All books state",this.state.allBooks)
    return (
      <div className="book-container">
        <BookList books={this.state.allBooks} addToShelf={this.addToShelf}/>
        <Bookshelf book={this.state.bookShelf} removeFromShelf={this.removeFromShelf} />
        <Form addBook={this.addNewBook}/>
      </div>
    );
  }
}

export default App;
