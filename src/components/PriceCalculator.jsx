// src/components/PriceCalculator.js
import React, { useState } from "react";
import "./PriceCalculator.css";

export default function PriceCalculator() {
    // Цена за один кондиционер (₪). Можно заменить на пропс или брать из API.
    const PRICE_PER_UNIT = 120;

    // Состояние: сколько кондиционеров выбрано
    const [quantity, setQuantity] = useState(1);

    // Обработчик изменения количества
    const handleQuantityChange = (e) => {
        // Превратим в число и минимальная граница = 1
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 1) {
            setQuantity(value);
        } else {
            setQuantity(1);
        }
    };

    // Общая цена = цена за единицу * количество
    const totalPrice = PRICE_PER_UNIT * quantity;

    return (
        <section className="price-calculator">
            <h3 className="price-calculator__title">Расчет стоимости</h3>

            <label htmlFor="pc-quantity" className="price-calculator__label">
                Количество кондиционеров:
            </label>
            <input
                id="pc-quantity"
                type="number"
                min="1"
                className="price-calculator__input"
                value={quantity}
                onChange={handleQuantityChange}
            />

            <div className="price-calculator__price">
                <span>Цена:</span>
                <span className="price-calculator__amount">
          {totalPrice.toLocaleString("ru-RU")} ₪
        </span>
            </div>
        </section>
    );
}