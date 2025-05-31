// src/components/TelegramButton.js
import React from "react";
import "./TelegramButton.css";

export default function TelegramButton() {
    return (
        <a
            href="https://t.me/IGideonI"
            className="telegram-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
        >
            {/* SVG-плейн белого цвета.
          Фон круга зададим через CSS. */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 240"
                className="telegram-button__icon"
            >
                <path
                    d="M21.3,111.3l181.7-74c2.8-1.1,5.5,1.6,4.6,4.3l-36.7,131.5c-0.9,3-4.4,4-6.3,1.7l-36.3-40.4l-20.9,20.1
             c-2.1,2-5.7,0.8-6.2-2.1L70.5,120.4L21.3,111.3z"
                    fill="#fff"
                />
            </svg>
        </a>
    );
}