import React from 'react';

const BookListItem = ({ title, author }) => {
  return(
    <div className="book">
      <div>Book Title: { title }</div>
      <div>Book Author: { author }</div>
    </div>
  );
}

export default BookListItem;