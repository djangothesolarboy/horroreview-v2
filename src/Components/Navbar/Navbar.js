import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';

import Carousel from '../Carousel/Carousel';
import posters from '../Carousel/posters.js';
import FilmReviewNav from '../FilmReviews/FilmReviewNav';
import FilmReview from '../FilmReviews/FilmReview';

import BookReviewNav from '../BookReviews/BookReviewNav';
import BookReview from '../BookReviews/BookReview';

import TVReviewNav from '../TVReviews/TVReviewNav';
import TVReview from '../TVReviews/TVReview';

export const Navbar = () => {
    return (
        <nav className='navbar-container'>
            <Router>
                <Link className='nav-link' exact to='/'>
                    Home
                </Link>
                <Link className='nav-link' exact to='/filmreviews'>
                    Films
                </Link>
                <Link className='nav-link' to='/tvreviews'>
                    TV
                </Link>
                <Link className='nav-link' to='/bookreviews'>
                    Books
                </Link>
                <Outlet/>
                <Routes>
                    <Route exact path='/' element={<Carousel posters={posters}/>}/>
                    <Route exact path='filmreviews' element={<FilmReviewNav/>}>
                        <Route index/>
                    </Route>
                    <Route exact path='/filmreviews/:filmId' element={<FilmReview/>}/>

                    <Route exact path='bookreviews' element={<BookReviewNav/>}>
                        <Route index/>
                    </Route>
                    <Route exact path='/bookreviews/:bookId' element={<BookReview/>}/>

                    <Route exact path='tvreviews' element={<TVReviewNav/>}>
                        <Route index/>
                    </Route>
                    <Route exact path='/tvreviews/:filmId' element={<TVReview/>}/>
                </Routes>
            </Router>
        </nav>
    )
}

export default Navbar;