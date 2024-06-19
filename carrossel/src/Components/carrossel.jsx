import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css'; // Arquivo CSS para estilos adicionais

const CarouselComponent = () => {
  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">Categorias</h2>
      <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
        <div className="carousel-item">
          <img src="dog.jpg" alt="Imagem 1" />
         
        </div>
        <div className="carousel-item">
          <img src="food.jpg" alt="Imagem 2" />
          
        </div>
        <div className="carousel-item">
          <img src="roupas.jpg" alt="Imagem 3" />
          
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
