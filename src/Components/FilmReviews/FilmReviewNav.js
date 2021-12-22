import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { filmreviews } from './filmreviews';
// import Malignant from './Pages/malignant';

const FilmReviewList = () => {
    return (
        <div className='film-nav-container'>
            {filmreviews.map((film)=> {
                return (
                    <div className='film'>
                        <NavLink className='review-link' alt={film.alt} to={`/filmreviews/${film.number}`} key={film.number}>
                            {film.name}
                        </NavLink>
                        <Outlet/>
                    </div>
                )
            })}
        </div>
    )
}

export default FilmReviewList;