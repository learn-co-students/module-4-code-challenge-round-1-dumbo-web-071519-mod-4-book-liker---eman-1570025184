import React from "react";

class Form extends React.Component {
  render() {
    return <h1>{<form>
      <label>
        Book Title:
        <input type="text" name="title" />
      </label>
      <label>
        Book Author:
        <input type="text" name="author" />
      </label>
      <label>
        Book Img URL:
        <input type="text" name="img" />
      </label>
      <input type="submit" value="Submit" />
    </form>}</h1>;
  }
}

export default Form;
