import posters from './posters';

let currentReview = document.querySelector('.carousel-content');
const link = document.createElement('a');
link.href = posters[0].link;
currentReview.appendChild(link);

const img = document.createElement('img');
img.src = posters[0].src;
img.alt = posters[0].alt;
img.className = posters[0].class;
link.appendChild(img);

let currentPoster = 0;

const right = () => {
    currentPoster++;
    if (currentPoster >= posters.length) currentPoster = 0;
    const img = document.querySelector('.poster');
    img.src = posters[currentPoster].src;
    img.alt = posters[currentPoster].alt;
    img.className = posters[currentPoster].class;
    link.href = posters[currentPoster].link;
    currentReview.appendChild(link);
}

const left = () => {
    currentPoster--;
    if (currentPoster < 0) currentPoster = posters.length - 1;
    const img = document.querySelector('.poster');
    img.src = posters[currentPoster].src;
    img.alt = posters[currentPoster].alt;
    img.className = posters[currentPoster].class;
    link.href = posters[currentPoster].link;
    currentReview.appendChild(link);
}

setInterval(function () {
    currentPoster++;
    if (currentPoster >= posters.length) currentPoster = 0;
    const img = document.querySelector('.poster');
    img.src = posters[currentPoster].src;
    img.alt = posters[currentPoster].alt;
    img.className = posters[currentPoster].class;
    link.href = posters[currentPoster].link;
    currentReview.appendChild(link);
}, 5200);

document.querySelector('.button-right').onclick = right;
document.querySelector('.button-left').onclick = left;



