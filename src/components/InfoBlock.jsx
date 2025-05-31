// src/components/InfoBlock.js
import React from "react";
import "./InfoBlock.css";

export default function InfoBlock({ title, children }) {
    return (
        <section className="info-block">
            <h2 className="info-block__title">{title}</h2>
            <div className="info-block__content">
                {children}
            </div>
        </section>
    );
}