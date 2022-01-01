import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ posters }) => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const length = posters.length;

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                setCurrent(current === length - 1 ? 0 : current + 1);
            }
        }, 5200);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    })
    
    const prevPoster = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    
    const nextPoster = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    if (!Array.isArray(posters) || posters.length <= 0) return null;

    return (
        <section className='carousel' onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <button className='arw-btn arrow-prev' onClick={prevPoster}><img alt='arrow' src='https://raw.githubusercontent.com/djangothesolarboy/kaboom-experiment/primary/assets/imgs/controls/left_arrow.ico'></img></button>
            <button className='arw-btn arrow-next' onClick={nextPoster}><img alt='arrow' src='https://raw.githubusercontent.com/djangothesolarboy/kaboom-experiment/primary/assets/imgs/controls/right_arrow.ico'></img></button>
            {posters.map((poster, index) => {
                return (
                    <div className={index === current ? 'poster active' : 'poster'} key={index}>
                        {index === current && (<img className='poster-img' src={poster.src} alt={poster.alt}/>)}
                    </div>
                )
            })}
        </section>
    )
}

export default Carousel;