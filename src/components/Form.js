import React from "react";

class Form extends React.Component {
  state={
    id: Math.floor((Math.random() * 100) + 1),
    title: '',
    author: '',
    img: ''
    
  }
  
  onChange=(e)=>{
    this.setState({
    [e.target.name]: e.target.value
    })
  }
  onSubmitHendler=(e)=>{
   e.preventDefault()
    this.props.submitHendler(this.state)
  }
  render() {
console.log(this.props)
    return <form onSubmit={this.onSubmitHendler}>
      <label>
        Title:
    <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
      </label>
      <label>
        Author:
    <input type="text" name="author" value={this.state.author} onChange={this.onChange}/>
      </label>
      <label>
        Image:
    <input type="text" name="img" value={this.state.img} onChange={this.onChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>;
  }
}

export default Form;
