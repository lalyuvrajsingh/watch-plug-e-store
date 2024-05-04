'use client'
import React, { useState, useEffect } from 'react';

function CustomSlider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, 3000);
        return () => clearTimeout(timer);
    }, [current]);

    return (
        <div className="slider">
            <button onClick={prevSlide}>&lt;</button>
            {slides.map((slide, index) => (
                <div key={index} className={index === current ? 'slide active' : 'slide'}>
                    {index === current && (
                        <img src={slide.image} classnName='w-[200px]' alt={`Slide ${index}`} />
                    )}
                </div>
            ))}
            <button onClick={nextSlide}>&gt;</button>
        </div>
    );
}

export default CustomSlider;
