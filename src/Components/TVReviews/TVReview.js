import { useParams } from 'react-router-dom';

import { getTVReview } from './tvreviews';
import './TVReview.css';

export default function TVReview() {
    let params = useParams();
    let tvReview = getTVReview(parseInt(params.tvId, 10));
    let text = tvReview.episodes;
    console.log('yeet ->' , text)
    return (
        <div className='review-container'>
            <div className='review-title_container'>
                <h2 className='review-title'>{tvReview.name}</h2>
            </div>
            <div className='review-text_container'>
                {text.map((tv) => <>
                    <p className='review-text'>{tv.ep_number}</p>
                    <p className='review-text'>{tv.ep_text}</p>
                </>
                )}
            </div>
        </div>
    )
}