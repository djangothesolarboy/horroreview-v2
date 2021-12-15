import React from 'react';
import { Route, Routes, NavLink, Outlet } from 'react-router-dom';

import { filmreviews } from './filmreviews';
import Malignant from './Pages/malignant';

const FilmReviewList = () => {
    return (
        <div className='film-nav-container'>
            {filmreviews.map((film)=> {
                return (
                    <div className='film'>
                        <NavLink className='review-link' to={`/filmreviews/${film.number}`} key={film.number}>
                            {film.name}
                        </NavLink>
                        <Outlet/>
                    </div>
                )
            })}
            {/* <Link to='malignant'>Malignant</Link>
            <Routes>
                <Route path='malignant' element={<Malignant/>}>Malignant</Route>
            </Routes> */}
        </div>
    )
}

export default FilmReviewList;