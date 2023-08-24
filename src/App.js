import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Mid from './components/middlesection';
import Carousel from './components/carousel';

function App() {
  return (
    <div>
      <div className='bg'>
        <button id='btn1' className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <Carousel />
      </div>
      <div className="hehe">
        <Navbar />
        <Mid />
      </div>
    </div>
  );
}

export default App;
