//App/index.js

import React, { Component } from 'react';
import NewBookForm from '../NewBookForm';
import BookList from '../BookList';
// import Book from '../../components/BookListItem';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookFilterInput from '../../components/BookFilterInput';
import {
  getBooksFromFakeXHR,
  addBookToFakeXHR,
  getBookByIdFromFakeXHR
} from '../../lib/books.db';


class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      currentBooks: []
    }

    this.filterBooks = this.filterBooks.bind(this);
  }

  addNewBook(bookTitle, bookAuthor) {
    let newBook = {
      title: bookTitle,
      author: bookAuthor
    }
    addBookToFakeXHR(newBook)
      .then((fakeBooks) => {
        this.setState({
          books: fakeBooks
        })
        this.setState({
          currentBooks: fakeBooks
        })
      });
  }

  filterBooks(event){
    let filteredBooks = this.state.books.filter(book => {
      return book.title.toLowerCase().includes(event.target.value.toLowerCase()) || book.author.toLowerCase().includes(event.target.value.toLowerCase())
    });

    this.setState({
      currentBooks: filteredBooks
    })
  }


    componentDidMount() {
      // console.log('componentDidMount');
      getBooksFromFakeXHR()
        .then((books) => {
          // console.log('fake books', fakeBooks);
          this.setState({
            books: books
          })

          this.setState({
            currentBooks: books
          })
        });
    }

  render() {
    return (
      <div className="book-app">

        <BookListAppTitle title = "The Library" />

        <BookList books={this.state.currentBooks} />

        <BookFilterInput titleText={"Filter by Book Title or Author"} filterBooks={this.filterBooks}/>

        <NewBookForm titleText={"Add to the Library"}
        addNewBook={this.addNewBook.bind(this)}
        />

      </div>
    );
  }
}

export default App;

