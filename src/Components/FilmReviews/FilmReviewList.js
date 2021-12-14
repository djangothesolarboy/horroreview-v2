import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import filmreviews from './filmreviews';

const FilmReviewList = () => {
    return (
        <div className='film-list-container'>
            {filmreviews.map((film)=> {
                return (
                    <>
                        <Link className='review-link' to={film.src}>
                            {film.name}
                        </Link>
                        {/* <Route path={film.src}/> */}
                    </>
                )
            })}
        </div>
    )
}

export default FilmReviewList;