import React from 'react';
import './GradientBox.css';

/**
 * Рендерит прямоугольник со скруглёнными углами,
 * внутри которого анимируется круговой градиент.
 *
 * Пропсы:
 *   width        — ширина (по умолчанию '200px')
 *   height       — высота (по умолчанию '100px')
 *   borderRadius — радиус скругления (по умолчанию '16px')
 */
const GradientBox = ({
                           width = '140px',
                           height = '55px',
                           borderRadius = '64px',
                           text,
                           href
                       }) => {
    // inline-стили для контейнера: задаём размеры, скругление и позиционирование
    const containerStyle = {
        width,
        height,
        borderRadius,
        position: 'relative', // чтобы потом “overlay” и “inner” внутри позиционировались по контейнеру
        overflow: 'hidden',   // обрезаем вращающийся фон по краям контейнера
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

export default GradientBox;