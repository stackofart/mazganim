import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";


export default function Header() {
    const { t, i18n } = useTranslation();

    return (
        <header className="header">
            {/* раньше было: <div className="header__logo">Название Компании</div> */}
            <div className="header__logo">CoolClean</div>

            {/* Сюда у вас мог быть какой-то <FlagSelector /> или <select> */}
            {/* Пример: если у вас простой селект: */}
            <div className="header__lang-selector">
                <select
                    value={i18n.language}
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                >
                    <option value="he">🇮🇱</option>
                    <option value="ru">🇷🇺</option>
                    <option value="ar">🇸🇦</option>
                    <option value="fr">🇫🇷</option>
                    <option value="en">🇬🇧</option>
                    {/* … другие языки */}
                </select>
            </div>
        </header>
    );
}