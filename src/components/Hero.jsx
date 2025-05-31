import React from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";
import GradientBox from "./GradientBox.jsx";


export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <h1 className="hero__title">CoolClean</h1>
            <h1 className="hero__subtitle">{t("slogan")}</h1>
            {/* Кнопка тоже на i18n: */}
            <GradientBox text={t("orderNow")} href={"#contact"}/>

        </section>
    );
}