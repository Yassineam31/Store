import React from "react";
import { Carousel } from "react-bootstrap";
import image_1 from '../assets/5328129.jpg';
import image_2 from '../assets/9464357.jpg';
import image_3 from '../assets/9769448.jpg';

const Banner = () => {
  return (
    <div className="home-banner">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image_1}
            alt="Première diapositive"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image_2}
            alt="Deuxième diapositive"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image_3}
            alt="Troisième diapositive"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;