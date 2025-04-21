import React from "react";

const CarouselContainer = ({ images = [], title, description }) => {
  const carouselId = `carousel-${title.replace(/\s+/g, "-")}`;

  return (
    <div className="carouselContainer my-4">
      <div id={carouselId} className="carousel slide carouselWidth" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <img src={img} className="d-block w-100" alt={`slide-${index}`} />
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </div>
  );
};

export default CarouselContainer;
