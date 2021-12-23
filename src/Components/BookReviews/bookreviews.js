export const bookreviews = [
    { 
        title: 'In The Hands Of The Heathens',
        author: 'Aron Beauregard',
        series: 'n/a',
        src: '/bookreviews/',
        number: 0,
        alt: ' review',
        text: `The second book I read by Beauregard, whilst waiting for Son Of The Slob to be released. I wasn't sure how this one would turn out or if it would be in gruesome comparison to The Slob. \n \n

        While this book wasn't nearly as gorey or disturbing as The Slob, it was still a pretty good read. I felt for some of the characters, while I awaited for the demise of others. \n \n
        
        A pretty solid read either way! Definitely on the tamer side if you are looking to get into the Splatterpunk genre. \n`
    },
    // { 
    //     title: '',
    //     author: '',
    //     series: 'n/a',
    //     src: '/bookreviews/',
    //     number: 1,
    //     alt: ' review',
    //     text: ``
    // },
    // { 
    //     title: '',
    //     author: '',
    //     series: 'n/a',
    //     src: '/bookreviews/',
    //     number: 2,
    //     alt: ' review',
    //     text: ``
    // },
];

export function getBookReviews() {
    return bookreviews;
};

export function getBookReview(number) {
    return bookreviews.find(
        bookReview => bookReview.number === number
    );
};