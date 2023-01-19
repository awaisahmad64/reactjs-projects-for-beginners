import { useState } from 'react';
import './assets/style.css';
function App() {
  const [current, setCurrent] = useState(0);
  const images = [
    './src/assets/images/aston-martin.jpg',
    './src/assets/images/audi-rs-e-tron-gt.jpg',
    './src/assets/images/maserati-mc20.jpg',
    './src/assets/images/nio-et5.jpg',
  ];
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
  return (
    <>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        <div className="carousal-count">
          {current + 1}/{images.length}
        </div>
        { 
        images.map(
          (image,index)=> 
          current === index &&(
            <div key={image} className='slide'>
              <img src={image} alt="image" />
            </div>
          )
        )}
      </div>
    </>
  );
}

export default App;
