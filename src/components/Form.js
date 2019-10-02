import React from "react";

class Form extends React.Component {
  state = {
    title: "",
    author: "",
    img: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

// MY FORM PROPS KEPT APPEARING AND DISAPPEARING

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    // this.props.addBook(this.state)
  };

  render() {
    console.log("Form Props:",this.props);
    return ( 
      <h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="author"
            placeholder="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="img"
            placeholder="img"
            value={this.state.img}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </h1>
    );
  }
    
}

export default Form;
