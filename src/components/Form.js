import React from "react";

class Form extends React.Component {
state={
  Author
  Title
  image
  
}

  render() {
    return <h1>{  
      <form onSubmit={ //GRAB THIS EVENT HANDLER FROM APP}>
        Title:
        <input onChange={ set state with vlaue from event.target.value} value={update from state}></input>
        Author:
        <input onChange={ set state with vlaue from event.target.value} value={update from state}></input>
      </form>

    }</h1>;
  }
}

export default Form;
