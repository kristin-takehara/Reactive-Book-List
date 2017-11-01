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

handleChangeTitle(event){
  this.setState({
    titleInput: event.target.value
  })
}

handleChangeAuthor(event){
  this.setState({
    authorInput: event.target.value
  })
}

handleSubmit(event){
  event.preventDefault();

  this.props.addNewBook(this.state.titleInput, this.state.authorInput);

  this.setState = ({
    titleInput: '',
    authorInput: ''
  })
}

  render(){
    return(
      <div>
        <h2>{ this.props.titleText }</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.titleInput} placeholder="Title" onChange={this.handleChangeTitle} />
          <input type="text" value={this.state.authorInput} placeholder="Author" onChange={this.handleChangeAuthor} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewBookForm;