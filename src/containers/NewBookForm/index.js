import React, {Component} from 'react';

class NewBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: ''
    }
  }

handleSubmit(event){
  event.preventDefault();
  console.log(this.state.titleInput);

  this.props.addNewBookForm(this.state.titleInput);
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
        <form>
          <input type="text" placeholder="Title" onChange={this.handleSubmit.bind(this)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewBookForm;