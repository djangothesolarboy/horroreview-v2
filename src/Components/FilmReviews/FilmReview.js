import { useParams } from 'react-router-dom';
import { getFilmReview } from './filmreviews';

export default function FilmReview() {
    let params = useParams();
    let filmReview = getFilmReview(parseInt(params.filmId, 10));
    let text = filmReview.text;
    return (
        <div className='review-container'>
            <div className='review-title_container'>
                <h2 className='review-title'>{filmReview.name}</h2>
            </div>
            <div className='review-text_container'>
                {text.split('\n').map((para) => <p className='review-text'>{para}</p>)}
            </div>
        </div>
    )
}