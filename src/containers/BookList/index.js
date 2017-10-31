import React, { Component } from 'react';
import BookListItem from '../../components/BookListItem';

class BookList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="book-list">
        {
          this.props.books.map(book => {
            return (
              <BookListItem
                key={book._id}
                title={book.title}
                author={book.author}
              />
            )
          })
        }
      </div>
    );
  }
}

export default BookList;