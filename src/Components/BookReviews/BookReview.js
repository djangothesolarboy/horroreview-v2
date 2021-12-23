import { useParams } from 'react-router-dom';
import { getBookReview } from './bookreviews';

export default function BookReview() {
    let params = useParams();
    let bookReview = getBookReview(parseInt(params.bookId, 10));
    let text = bookReview.text;
    return (
        <div className='review-container'>
            <div className='review-title_container'>
                <h2 className='review-title'>{bookReview.title}</h2>
            </div>
            <div className='review-text_container'>
                {text.split('\n').map((para) => <p className='review-text'>{para}</p>)}
            </div>
        </div>
    )
}