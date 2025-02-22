import React, { useState } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { image: "https://i.pinimg.com/736x/37/4a/86/374a863c36fe232fb398497cad516519.jpg",description: "Microsoft Surface" },
  { image: "https://i.pinimg.com/736x/ca/b3/98/cab3986bca198ce56249c14c68f3d55e.jpg", description: "Office Setup" },
  { image: "https://i.pinimg.com/736x/18/16/00/181600b56cb9b0d5095ecc594d0566bc.jpg", description: "Modern Architecture" },
  { image: "https://i.pinimg.com/736x/41/26/51/4126518793fd53bcc94291f008a153a9.jpg", description: "Creative Design" },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    centerMode: true,          
    centerPadding: "60px",     
    slidesToShow: 3,           
    infinite: true,            
    speed: 500,                
    arrows: true,              
    beforeChange: (_, next) => setActiveIndex(next), 
  };

  return (
    <div className="app-container">
      <h2 className="heading">My Recent Case Studies</h2>
      <p className="subheading">I'm as good as my last project. Explore them below.</p>

      <div className="carousel-container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={slide ${index === activeIndex ? "active" : "inactive"}}
            >
              <img src={slide.image} alt={Slide ${index + 1}} />
            </div>
          ))}
        </Slider>
        <p className="slide-description">{slides[activeIndex].description}</p>
      </div>
    </div>
  );
};

export default Carousel;                                                                                                                                                                                                                                                                                 
body {
    background-color: #121212;
    color: white;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  
  
  .app-container {
    text-align: center;
    max-width: 900px;
    width: 100%;
    padding: 20px;
  }
  
  
  .heading {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  
  .subheading {
    font-size: 1rem;
    margin-bottom: 20px;
    opacity: 0.8;
  }
  
  .carousel-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden;
    
    margin: 0;
    padding: 0;
}

  
  
  .slick-slider {
    width: 100%;
    position: relative;
  }
  
  
  .slick-slide {
    transition: all 0.5s ease-in-out;
    opacity: 0.5;
    transform: scale(0.9);
    filter: blur(2px);
  }
  
  
  .slick-slide.slick-center {
    opacity: 1;
    
    filter: blur(0px);
    border-radius: 50%;
    
    
  }
  
  
  .slick-slide img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 15px;
  }
  
  .slick-prev, .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    color: white;
    font-size: 24px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

  
.slick-prev {
    left: 10px !important;
}

.slick-next {
    right: 10px !important;
}
  
.slick-prev::before,
.slick-next::before {
    content: ''; 
    display: block;
}

  
  .slide-description {
    margin-top: 15px;
    font-size: 1rem;
    color: white;
    text-align: center;
    max-width: 80%;
  }
  @media (max-width: 768px) {
    .carousel-container {
        width: 100%;
        overflow: hidden;
    }
}