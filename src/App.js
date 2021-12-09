import './App.css';
import posters from './ReviewCarousel/posters.js';
import Carousel, { CarouselItem } from './ReviewCarousel/Carousel-v2';

function App() {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem>
          <img src={posters[0].src} alt={posters[0].alt}/>
        </CarouselItem>
        <CarouselItem>
          <img src={posters[1].src} alt={posters[1].alt}/>
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
