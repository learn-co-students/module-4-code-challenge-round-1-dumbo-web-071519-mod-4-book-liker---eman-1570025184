import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";



class BookList extends Component {

	displaybook=(singlebookObj)=>{
		return(
			<li >
				<Book 
					key={singlebookObj.bookdata.id} 
					bookinfo={singlebookObj}
					handleOnBookClick={this.props.handleOnBookClick} />
			</li>
		)  
	}

	render() {
		
		return (
		<div className="book-list">
			<h1>Book List</h1>
			<Form />
			<ul>{ this.props.allbooksArr.map((singlebookObj)=>this.displaybook(singlebookObj) ) }</ul>
		</div>
		);
	}
}

export default BookList;
