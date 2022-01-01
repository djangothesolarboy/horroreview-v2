import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { filmreviews } from './filmreviews';
import './FilmReviewNav.css';

const FilmReviewList = () => {
    return (
        <div className='film-nav-container'>
            <div className='spoiler-container'>
                <h2 className='spoiler-warning'>*Spoilers Ahead*</h2>
            </div>
            <div className='film-links-container'>
                {filmreviews.map((film)=> {
                    return (
                        <div className='film'>
                            <NavLink className='review-link' alt={film.alt} to={`/filmreviews/${film.number}`} key={film.number}>
                                {film.name}
                            </NavLink><br/>
                            <Outlet/>
                            <a href={`/filmreviews/${film.number}`}>
                                <img className='review-poster' alt={film.alt} src={film.poster}/>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FilmReviewList;