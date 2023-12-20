import React, { useState, useEffect } from 'react';
import './Slider.scss';

interface Slide {
    id: number;
    image: string;
}

const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const handleDotClick = (index: number): void => {
        setCurrentSlide(index);
        resetTimer();
    };

    const slides: Slide[] = [
        { id: 1, image: `assets/images/sliderChair.png` },
        { id: 2, image: `assets/images/sliderChair.png` },
        { id: 3, image: `assets/images/sliderChair.png` },
    ];

    const slideInterval: number = 5000;
    let timer: NodeJS.Timeout;

    const resetTimer = (): void => {
        clearInterval(timer);
        timer = setInterval(() => {
            const nextSlide = (currentSlide + 1) % slides.length;
            setCurrentSlide(nextSlide);
        }, slideInterval);
    };

    useEffect(() => {
        resetTimer();
        return () => clearInterval(timer);
    }, [currentSlide]);

    return (
        <div className="slider-wrapper">
            <div className="slider-image-and-about-wrapper">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slider-image-wrapper ${index === currentSlide ? 'active-slide' : 'disabled'}`}
                    >
                        <img src={slide.image} alt="" />

                        <div className={`about-slider-image-details ${index === currentSlide ? 'active-slide' : 'disabled'}`}>
                            <p>HOT DEALS THIS WEEK</p>
                            <div className="slider-sale">
                                <h2>SALE 50% OFF <br /> MODERN FURNITURE</h2>
                            </div>
                            <button className="view-more-button">VIEW NOW</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="slider-buttons-wrapper">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentSlide ? 'slider-change-button active-slide-button' : 'slider-change-button'}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
