import './App.css';
import posters from './Components/Carousel/posters.js';
import Carousel from './Components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Carousel posters={posters}/>
    </div>
  );
}

export default App;
