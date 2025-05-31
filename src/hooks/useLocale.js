// src/hooks/useLocale.js
import { useState, useEffect } from 'react';

/**
 * Хук возвращает текущую локаль пользователя.
 * Сначала пробует взять из localStorage (если пользователь вручную выбирал язык),
 * иначе — изучает `navigator.language` и берет первые две буквы.
 * По-умолчанию — 'he'.
 */
export function useLocale() {
    const [locale, setLocale] = useState('he');

    useEffect(() => {
        // 1) Проверяем, не сохранил ли пользователь язык ранее вручную
        const saved = localStorage.getItem('app_locale');
        if (saved && ['he', 'en', 'ru', 'ar', 'fr'].includes(saved)) {
            setLocale(saved);
            return;
        }

        // 2) Определяем браузерную локаль (navigator.language может быть 'ru-RU', 'en-US' и т. д.)
        const nav = navigator.language || navigator.userLanguage || 'he';
        const code = nav.split('-')[0]; // 'ru', 'en', 'he', 'ar', 'fr'
        if (['he', 'en', 'ru', 'ar', 'fr'].includes(code)) {
            setLocale(code);
        } else {
            setLocale('he');
        }
    }, []);

    // Позволяет переключать язык программно
    const changeLocale = (newLocale) => {
        if (!['he', 'en', 'ru', 'ar', 'fr'].includes(newLocale)) return;
        localStorage.setItem('app_locale', newLocale);
        setLocale(newLocale);
        // Обычно после смены локали вы либо делаете перезагрузку,
        // либо триггерите ре-рендер всех компонентов,
        // например через Context. Но этот хук лишь упрощённая версия.
    };

    return [locale, changeLocale];
}