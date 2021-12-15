export const filmreviews = [
    { 
        name: 'Malignant', 
        src: '/filmreviews/malignant', 
        number: 0,
        alt: 'malignant review',
        text: 'lorem'
    },
    { 
        name: 'Halloween Kills', 
        src: '/filmreviews/halloween-kills', 
        number: 1,
        alt: ' review',
        text: 'lorem'
    },
    { 
        name: 'Escape Room: Tournament Of Champions', 
        src: '/filmreviews/escape-room_tournament-of-champions', 
        number: 2,
        alt: ' review',
        text: 'lorem'
    },
    // { 
    //     name: '', 
    //     src: '', 
    //     alt: ' review' 
    // },
    // { 
    //     name: '', 
    //     src: '', 
    //     alt: ' review' 
    // },
    // { 
    //     name: '', 
    //     src: '', 
    //     alt: ' review' 
    // }
];

export function getFilmReviews() {
    return filmreviews;
}

export function getFilmReview(number) {
    return filmreviews.find(
        filmReview => filmReview.number === number
    );
}