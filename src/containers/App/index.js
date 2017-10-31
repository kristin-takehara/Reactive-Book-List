//App/index.js

import React, { Component } from 'react';
import NewBookForm from '../NewBookForm';
import BookList from '../BookList';
// import Book from '../../components/BookListItem';
import AppTitle from '../../components/BookListAppTitle';
import {
  getBooksFromFakeXHR,
  addBookToFakeXHR,
  getBookByIdFromFakeXHR
} from '../../lib/books.db';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'The Library',
      books: []
    }
  }

  addNewBook(bookTitle, bookAuthor) {
      let newBook = {
        title: bookTitle,
        author: bookAuthor
      }
      addBookToFakeXHR(newBook)
        .then((books) => {
          this.setState({
          books: books
          })
        })
    }

    componentDidMount() {
      console.log('componentDidMount');
      getBooksFromFakeXHR()
        .then((fakeBooks) => {
          // console.log('fake books', fakeBooks);
          this.setState({
            books: fakeBooks
          })
        })
    }

  render() {
    return (
      <div className="book-app">
        <NewBookForm
        quote="Enter new book title"
        addNewBook={this.addNewBook.bind(this)}
        />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;

