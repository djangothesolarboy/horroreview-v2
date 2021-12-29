export const bookreviews = [
    { 
        title: 'In The Hands Of The Heathens',
        author: 'Aron Beauregard',
        series: 'n/a',
        src: '/bookreviews/in-the-hands-of-the-heathens',
        number: 0,
        alt: 'in the hands of the heathens review',
        text: `The second book I read by Beauregard, whilst waiting for Son Of The Slob to be released. I wasn't sure how this one would turn out or if it would be in gruesome comparison to The Slob. \n \n

        While this book wasn't nearly as gorey or disturbing as The Slob, it was still a pretty good read. I felt for some of the characters, while I awaited for the demise of others. \n \n
        
        A pretty solid read either way! Definitely on the tamer side if you are looking to get into the Splatterpunk genre. \n`
    },
    { 
        title: 'The Slob',
        author: 'Aron Beauregard',
        series: 'Book 1 of 2',
        src: '/bookreviews/the-slob',
        number: 1,
        alt: 'the slob review',
        text: `I was looking for a god disturbing horror book to read, as I hadn't read very many. I tend to enjoy gore films and was eager to find a book in a similar vein. \n \n
                        
        I don't know how I came across this book, but I am glad that I did. It is very graphic all the way through. Although at times it felt like something was missing or felt a little rushed, I enjoyed reading this. I mean mostly enjoyed given the subject matter. \n \n
        
        Overall if you are looking for gore but in book form, this is definitely up your alley. It is very detailed with a
        pretty likable main character Vera. I am excited to get my hands on the second book as well! \n`
    },
    { 
        title: 'Son Of The Slob',
        author: 'Aron Beauregard',
        series: 'Book 2 of 2',
        src: '/bookreviews/the-slob',
        number: 2,
        alt: 'son of the slob review',
        text: `As disturbing as some parts of the book are, the story of it all is really what kept me reading. To some I'm sure a lot of the Gore will seem really pointless but I think that the gore just displays how horrible humans can be. Even if this book is pure fiction, I am more than sure that someone out there has done things similar or worse. In any case, as a follow up to the first book I thoroughly enjoyed the story. Wanting to know what would happen to Harold, Vera and Daniel was something I wanted to know from the beginning. I would definitely say I wasn't disappointed, an excellent follow up to The Slob. \n`
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