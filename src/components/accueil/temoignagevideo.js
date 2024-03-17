import React, { useState } from 'react';
import '../../styles/accueil-styles/temoignagevideo.css';

const Temoignagevideo = () => {
  const [count, setCount] = useState(0);
  const videos = [
    "https://www.youtube.com/embed/G90FGCnsYDo?controls=0",
    "https://www.youtube.com/embed/4B4h0a36-ic",
    "https://www.youtube.com/embed/2VJWUARvkIg",
  ];
  const videoCount = videos.length;

  const showNextItem = () => {
    setCount((prevCount) => (prevCount < videoCount - 1 ? prevCount + 1 : 0));
  };

  const showPreviousItem = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : videoCount - 1));
  };

  const keyPress = (e) => {
    if (e.keyCode === 37) {
      showPreviousItem();
    } else if (e.keyCode === 39) {
      showNextItem();
    }
  };

  return (
    <div className="container-tem-video">
      <h2 className="flex justify-center text-4xl font-bold">Temoignage vidéo</h2>
      <div className="slider">
        {videos.map((video, index) => (
          <iframe
            key={index}
            className={index === count ? 'active' : 'hidden'}
            width="560"
            height="315"
            src={video}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`Slider ${index}`}
          ></iframe>
        ))}
      </div>
      <nav className="slider-nav">
        <ul>
          <li className="arrow">
            <button className="previous" onClick={showPreviousItem}>
              <span>
                <i className="ion-arrow-left-c">&lt;</i>
              </span>
            </button>
          </li>
          <li className="arrow">
            <button className="next" onClick={showNextItem}>
              <span>
                <i className="ion-arrow-right-c">&gt;</i>
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Temoignagevideo;
