import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
	state={
		booklist: []
	}

	componentDidMount(){
		fetch("http://localhost:3005/books")
		.then(response=>response.json())
		.then(this.addBooksToState)
	}

	addBooksToState=(bookArray)=>{
		return this.setState({
			booklist: bookArray.map((bookObj)=>{
				let bookDataWrapper = {
					inshelf: false,
					bookdata: bookObj
				}
				return bookDataWrapper
			})
		})
	}
	//// I DON"T KNOW HOW THIS BROKE
	handleOnBookClick=( bookid)=>{
		let updatedBooklist=this.state.booklist.map((bookObj)=>{
			if(bookObj.bookdata.id===bookid){
				// NEED TO SET BOOK INSHELF TO TRUE IF IN SHELF
				// SET INSHELF TO FALSE IF CLICKED AND ALREDY IN SHELF
				// if(bookObj.inshelf==true){
				// 	console.log("change to false")
				// }
				// else{
				// 	console.log("change to true")
				// }

			}
		})

		this.setState({
			booklist: updatedBooklist
		})
		return console.log("updated", updatedBooklist)
	}
	
	filteredbooks =()=>{
		return this.state.booklist.filter((bookObj)=>{
			console.log("current shelf status", bookObj.inshelf)
			return bookObj.inshelf==true
		})
	}
  
	render() {
		return (
		<div className="book-container">
			<BookList allbooksArr={this.state.booklist} handleOnBookClick={this.handleOnBookClick}  />
			<Bookshelf allbooksArr={this.filteredbooks} handleOnBookClick={this.handleOnBookClick}/>
		</div>
		);
	}
}

export default App;
