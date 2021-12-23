import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { tvreviews } from './tvreviews';

const TVReviewNav = () => {
    return (
        <div className='tv-nav-container'>
            {tvreviews.map((tv)=> {
                return (
                    <div className='tv'>
                        <NavLink className='review-link' alt={tv.alt} to={`/tvreviews/${tv.number}`} key={tv.number}>
                            {tv.name}
                        </NavLink>
                        <Outlet/>
                    </div>
                )
            })}
        </div>
    )
}

export default TVReviewNav;