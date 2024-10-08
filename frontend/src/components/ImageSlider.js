import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';

// Import images
import image1 from '../assets/images/4.png';
import image2 from '../assets/images/3.png';
import image3 from '../assets/images/2.png';
import image4 from '../assets/images/1.png';
import image5 from '../assets/images/5.png';

const images = [image1, image2, image3, image4, image5];

function ImageSlider() {
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Enable continuous loop
        speed: 1000, // Transition speed in milliseconds (1 second)
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 4000, // Time between slides in milliseconds (3 seconds)
        arrows: false, // Hide navigation arrows
        pauseOnHover: false, // Do not pause sliding when hovered
        swipeToSlide: true, // Allow swipe to slide
        draggable: true, // Allow dragging to slide
    };

    return (
        <div className="image-slider">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slider-item">
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ImageSlider;
