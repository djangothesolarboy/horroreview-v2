export const tvreviews = [
    { 
        name: '',
        season_one: {
            episodes: {
                one: {
                    ep_name: '',
                    ep_number: 1,
                    ep_text: ``
                },
            } 
        },
        src: '/tvreviews/',
        number: 0,
        alt: ' review',
        text: ``
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