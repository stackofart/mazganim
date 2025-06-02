import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css'; // стиль для анимации/размещения

import img1 from "../assets/filters.png";
import img2 from "../assets/worker.png";
import img3 from "../assets/family.png";

const images = [
    img1,
    img2,
    img3,
];

function AutoCarousel({ interval = 3000 }) {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);

    // сбрасываем таймер при смене current
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, interval);

        return () => {
            resetTimeout();
        };
    }, [current, interval]);

    return (
        <div className="carousel">
            <div
                className="carousel__inner"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((src, idx) => (
                    <img key={idx} src={src} alt={`slide-${idx}`} className="carousel__img" />
                ))}
            </div>

            {/* навигационные точки (опционально) */}
            <div className="carousel__dots">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={`dot ${current === idx ? 'dot--active' : ''}`}
                        onClick={() => setCurrent(idx)}
                    />
                ))}
            </div>
        </div>
    );
}

export default AutoCarousel;