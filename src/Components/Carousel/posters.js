import { useParams } from 'react-router-dom';
import { getFilmReview } from '../FilmReviews/filmreviews';

const posters = [
    {
        name: 'malignant',
        src: process.env.PUBLIC_URL + './Posters/malignant-poster.jpg',
        alt: 'malignant poster',
        class: 'poster',
        // link: './reviews/malignant.html'
    }, {
        name: 'escape room 2',
        src: process.env.PUBLIC_URL + '../Posters/escape_room_2-poster.jpg',
        alt: 'escape room 2 poster',
        class: 'poster',
        // link: './reviews/escape-room-2.html'
    }, {
        name: 'the slob',
        src: process.env.PUBLIC_URL + '../Posters/the-slob.jpg',
        alt: 'the slob cover',
        class: 'poster',
        // link: './reviews/the-slob.html'
    }, {
        name: 'in the hands of the heathens',
        src: process.env.PUBLIC_URL + '../Posters/in-the-hands-of-the-heathens.jpg',
        alt: 'in the hands of the heathens cover',
        class: 'poster',
        // link: './reviews/in-the-hands-of-the-heathens.html'
    }, {
        name: 'halloween kills',
        src: process.env.PUBLIC_URL + '../Posters/halloween-kills_poster.jpg',
        alt: 'halloween kills poster',
        class: 'poster',
        // link: './reviews/halloween-kills.html'
    }, {
        name: 'chucky',
        src: process.env.PUBLIC_URL + '../Posters/chucky-show_poster.jpeg',
        alt: 'chucky poster',
        class: 'poster',
        // link: './reviews/chucky-show.html'
    }, {
        name: 'day of the dead',
        src: process.env.PUBLIC_URL + '../Posters/dotd-s1_poster.jpg',
        alt: 'day of the dead poster',
        class: 'poster',
        // link: './reviews/day-of-the-dead.html'
    }
    , {
        name: 'son of the slob',
        src: process.env.PUBLIC_URL + '../Posters/son-of-the-slob_poster.jpg',
        alt: 'son of the slob poster',
        class: 'poster',
        // link: './reviews/'
    }
    // , {
    //     name: '',
    //     src: process.env.PUBLIC_URL + '../Posters/',
    //     alt: 'poster',
    //     class: 'poster',
    //     link: './reviews/'
    // }
];

export default posters;