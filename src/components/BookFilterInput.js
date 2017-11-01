import React from 'react';

const BookFilterInput = (props) => {
  return(
    <div className="book-filter-form">
      <h2>{props.titleText}</h2>
      <input type="text" onChange={props.filterBooks}/>
    </div>
  );
}

export default BookFilterInput;