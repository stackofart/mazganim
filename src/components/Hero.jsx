import React from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";
import OrderButton from "./OrderButton.jsx";
import family from "../assets/family1.png";


export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero"
                 style={{
                     backgroundImage: `url(${family})`,
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "bottom",

                 }}>
            <h1 className="hero__title">CoolClean</h1>
            <h1 className="hero__subtitle">{t("slogan")}</h1>

            <OrderButton text={t("orderNow")} href={"#contact"}/>

        </section>
    );
}