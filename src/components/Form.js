import React from "react";

class Form extends React.Component {

  state={
    title: "",
    author: "",
    img: ""
  }

  handleFormChange = (event) => {
    // event.preventDefault()
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return <form onSubmit={(event)=> this.props.handleSubmit(event, this.state)}>
      
    <input onChange={this.handleFormChange} type="text" name="title" value={this.state.title} placeholder={"Title Goes Here"}/>
      <input onChange={this.handleFormChange} type="text" name="author" value={this.state.author} placeholder={"Credit the Author"}/>
      <input onChange={this.handleFormChange} type="text" name="img" value={this.state.img} placeholder={"IMG URL plz"}/>
    <input type="submit" value="Submit" />
    </form>;
  }
}

export default Form;
