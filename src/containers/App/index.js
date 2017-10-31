//App/index.js

import React, { Component } from 'react';
import NewBookForm from '../NewBookForm';
import BookList from '../BookList';
import BookListItem from '../../components/BookListItem';


class App extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    }
  }

  addNewBook(bookTitle) {
      let newBook = {
        title: bookTitle
      };

      this.setState({
        books: [...this.state.books, newBook]
      })
    }


  render() {
    return (
      <div className="App">
        <BookListItem book={this.state.book} />
      </div>
    );
  }
}

export default App;
