import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import filmreviews from './filmreviews';
import Malignant from './Pages/malignant';

const FilmReviewList = () => {
    return (
        <div className='film-nav-container'>
            {/* {filmreviews.map((film)=> {
                return (
                    <div className='film'>
                        <Link className='review-link' to={film.src} element={<Malignant/>}>
                            {film.name}
                        </Link>
                    </div>
                )
            })} */}
            <Link to='malignant'>Malignant</Link>
            <Routes>
                <Route path='malignant' element={<Malignant/>}>Malignant</Route>
            </Routes>
        </div>
    )
}

export default FilmReviewList;