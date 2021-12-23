import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { bookreviews } from './bookreviews';

const BookReviewNav = () => {
    return (
        <div className='book-nav-container'>
            {bookreviews.map((book)=> {
                return (
                    <div className='book'>
                        <NavLink className='review-link' alt={book.alt} to={`/bookreviews/${book.number}`} key={book.number}>
                            {book.title} by {book.author}
                        </NavLink>
                        <Outlet/>
                    </div>
                )
            })}
        </div>
    )
}

export default BookReviewNav;