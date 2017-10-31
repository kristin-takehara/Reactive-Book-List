import React, { Component } from 'react';
import NewBookForm from '../NewBookForm';
import { getBooksFromFakeDB, addBookToFakeXHR, getBookByIdFromFakeXHR  } from '../../lib/books.db';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  addBookToFakeXHR(bookTitle) {
    let newBook = {
      title: bookTitle
    };

    this.setState({
      books: [...this.state.books, newBook]
    })
  }

  componentWillMount() {
    console.log(this.state.books);
  }

  render() {
    return (
      <div className="BookList">
        <NewBookForm
        quote="Enter new book title"
        addNewBook={this.addNewBook.bind(this)}
        />

        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default BookList;