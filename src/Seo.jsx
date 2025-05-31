// src/components/Seo/Seo.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { metaConfig } from './seo/meta.js';

export default function Seo({ locale }) {
    // Берём из metaConfig нужные поля
    const { htmlLang, title, description, keywords } = metaConfig[locale] || metaConfig.he;

    return (
        <Helmet>
            {/* Меняем атрибут <html lang="..."> */}
            <html lang={htmlLang} />

            {/* Заголовок страницы */}
            <title>{title}</title>

            {/* Основные мета-теги */}
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

        </Helmet>
    );
}