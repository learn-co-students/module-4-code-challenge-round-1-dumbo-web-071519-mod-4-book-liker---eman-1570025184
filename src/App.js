import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(response => response.json())
      .then(data => this.setState({ data }));
}

  render() {
    return (
      <div className="App">
           <BookList />
           <Bookshelf />   
      </div>
    );
  }
}


export default App;