import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';

import Carousel from '../Carousel/Carousel';
import posters from '../Carousel/posters.js';
import FilmReviewNav from '../FilmReviews/FilmReviewNav';
import FilmReview from '../FilmReviews/FilmReview';

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
                        <Route index element={<p>Select a Film</p>}/>
                        <Route path=':filmId' element={<FilmReview/>}/>
                    </Route>
                </Routes>
            </Router>
        </nav>
    )
}

export default Navbar;