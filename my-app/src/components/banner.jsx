import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './banner.css';

function Banner() {
  return (
    <div className="banner">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src="/assets/img/confections.jpg" alt="Süssigkeiten" />
        </div>
        <div>
          <img src="/assets/img/meat-poultry.jpg" alt="Fleisch & Poulet" />
        </div>
        <div>
          <img src="/assets/img/spices.jpg" alt="Gewürze" />
        </div>
        <div>
          <img src="/assets/img/water.jpg" alt="Wasser" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;