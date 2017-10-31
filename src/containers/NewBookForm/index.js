//NewBookForm - index.js

import React, {Component} from 'react';

class NewBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: '',
      authorInput: ''
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this);

    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
  }

handleSubmit(event){
  event.preventDefault();
  console.log(this.state.titleInput);

  this.props.addNewBook(this.state.titleInput, this.state.authorInput);
}

handleChangeTitle(event){
  this.setState({
    titleInput: event.target.value
  });
}

handleChangeAuthor(event){
  this.setState({
    authorInput: event.target.value
  });
}

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Title" onChange={this.handleChangeTitle} />
          <input type="text" placeholder="Author" onChange={this.handleChangeAuthor} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewBookForm;