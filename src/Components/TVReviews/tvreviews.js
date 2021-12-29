export const tvreviews = [
    { 
        name: 'ahs',
        src: '/tvreviews/',
        number: 0,
        alt: ' review',
        episodes: [
            {
                ep_name: '',
                ep_number: 's01e01',
                ep_text: `lorem ipsum`
            },
            {
                ep_name: '',
                ep_number: 's01e02',
                ep_text: `lorem ipsum`
            },
        ],
    },
    { 
        name: 'american horror stories',
        src: '/tvreviews/',
        number: 1,
        alt: ' review',
        episodes: [
            {
                ep_name: '',
                ep_number: 's01e01',
                ep_text: `lorem ipsum`
            },
            {
                ep_name: '',
                ep_number: 's01e02',
                ep_text: `lorem ipsum`
            },
        ],
    },
];

export function tvReviews() {
    return tvreviews;
};

export function getTVReview(number) {
    return tvreviews.find(
        tvReview => tvReview.number === number
    );
};