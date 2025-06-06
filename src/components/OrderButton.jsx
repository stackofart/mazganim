import React from 'react';
import './OrderButton.css';

const OrderButton = ({
                           width = '180px',
                           height = '45px',
                           borderRadius = '64px',
                           text,
                           href
                       }) => {
    // inline-стили для контейнера: задаём размеры, скругление и позиционирование
    const containerStyle = {
        width,
        height,
        borderRadius,
        position: 'relative',
        overflow: 'hidden'
    };

    return (
        <a
            href={href}
            className="rg-container"
            style={containerStyle}
        >
            {/* 1) Большой блок-фон, который вращается */}
            <div className="rg-inner" />

            {/* 2) Белый оверлей чуть меньше по inset, внутри него текст */}
            <div className="rg-overlay">
                <span className="rg-text">{text}</span>
            </div>
        </a>
    );
};

export default OrderButton;