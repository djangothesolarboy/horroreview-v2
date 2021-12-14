import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Carousel from '../Carousel/Carousel';
import posters from '../Carousel/posters.js';
import FilmReviewList from '../FilmReviews/FilmReviewList';

export const Navbar = () => {
    return (
        <nav className='navbar-container'>
            {/* <a href='./'>Home | </a>
            <a href='/film-reviews'>Films</a> */}
            <Router>
                <Link exact to='/'>
                    Home
                </Link>
                <Link to='/filmreviews'>
                    Films
                </Link>
                <Routes>
                    <Route exact path='/' element={<Carousel posters={posters}/>}/>
                    <Route path='/filmreviews' element={<FilmReviewList />}/>
                </Routes>
            </Router>
        </nav>
    )
}

export default Navbar;