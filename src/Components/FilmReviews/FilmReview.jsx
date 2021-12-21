import { useParams } from 'react-router-dom';
import { getFilmReview } from './filmreviews';

export default function FilmReview() {
    let params = useParams();
    let filmReview = getFilmReview(parseInt(params.filmId, 10));
    return (
        <>
            <h2>{filmReview.name}</h2>
            <p>{filmReview.text}</p>
        </>
    )
}