import './App.css';
import posters from './Components/Carousel/posters.js';
import Carousel from './Components/Carousel/Carousel';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel posters={posters}/>
    </div>
  );
}

export default App;
