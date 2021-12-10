import React from 'react';
import filmreviews from './filmreviews';

const FilmReviewList = () => {
    return (
        <div className='film-list-container'>
            {filmreviews.map((film)=> {
                return (
                    <a className='review-link' href={film.src}>{film.name}</a>
                )
            })}
        </div>
    )
}

export default FilmReviewList;