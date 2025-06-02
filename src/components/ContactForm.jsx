// src/components/ContactForm.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ContactForm.css";

export default function ContactForm() {
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"
    const [errorMsg, setErrorMsg] = useState("");

    // Ваш Formspree-endpoint (замените на свой)
    const FORMSPREE_URL = "https://formspree.io/f/mpwrzaby";

    // Проверка номера телефона: либо 10 цифр, начинающихся с 05, либо +9725XXXXXXXX (12 цифр + "+")
    const validatePhone = (value) => {
        const localRegex = /^05\d{8}$/;
        const intlRegex = /^\+9725\d{8}$/;
        if (localRegex.test(value) || intlRegex.test(value)) {
            return "";
        } else {
            return t("ContactForm.validationError");
            // В translation.json должно быть:
            // "ContactForm": {
            //   "validationError": "Номер телефона должен быть либо 10 цифр, начинающихся с 05 (например, 0523456789) или в формате +9725XXXXXXXX (например, +972523456789)."
            // }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setStatus("sending");

        // локальная валидация телефона
        const phoneTrimmed = phone.trim();
        const validationError = validatePhone(phoneTrimmed);
        if (validationError) {
            setErrorMsg(validationError);
            setStatus("error");
            return;
        }

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ name, phone: phoneTrimmed }),
            });

            const data = await response.json();
            if (response.ok) {
                // Успешная отправка
                setStatus("success");
                setName("");
                setPhone("");
            } else {
                // Если Formspree вернул ошибку
                throw new Error(data.error || "Ошибка отправки");
            }
        } catch (err) {
            console.error("Formspree error:", err);
            setErrorMsg(t("ContactForm.sendError") || "Не удалось отправить заявку, попробуйте позже.");
            setStatus("error");
        }
    };

    // Если успешно отправлено — показываем сообщение
    if (status === "success") {
        return (
            <div id="contact" className="contact-form contact-form--success">
                <p className="contact-form__success-text">
                    {t("ContactForm.success")}
                    {/* В ваших переводах (translation.json) это может быть, например:
              "ContactForm": {
                "success": "Заявка успешно отправлена! Скоро мы с вами свяжемся."
              }
          */}
                </p>
            </div>
        );
    }

    return (
        <form id="contact" className="contact-form" onSubmit={handleSubmit} noValidate>
            <h3 className="contact-form__title">{t("ContactForm.title")}</h3>
            {/* В переводах: "ContactForm": { "title": "Обратная связь" } */}

            <label htmlFor="contact-name" className="contact-form__label">
                {t("ContactForm.labelName")}:
                {/* "ContactForm.labelName": "Имя" */}
            </label>
            <input
                id="contact-name"
                type="text"
                className="contact-form__input"
                placeholder={t("ContactForm.labelName")}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="contact-phone" className="contact-form__label">
                {t("ContactForm.labelPhone")}
                <span className="contact-form__required">*</span>:
                {/* "ContactForm.labelPhone": "Телефон" */}
            </label>
            <input
                id="contact-phone"
                type="text"
                className={`contact-form__input ${
                    errorMsg && status === "error" ? "contact-form__input--error" : ""
                }`}
                placeholder={t("ContactForm.labelPhone")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            {errorMsg && status === "error" && (
                <p className="contact-form__error">{errorMsg}</p>
            )}
            {/* В translation.json: "ContactForm.sendError": "Не удалось отправить заявку. Попробуйте позже." */}

            <button
                type="submit"
                className="contact-form__btn"
                disabled={status === "sending"}
            >
                {status === "sending" ? t("ContactForm.sending") : t("ContactForm.submit")}
                {/* "ContactForm.sending": "Отправляем..." */}
                {/* "ContactForm.submit": "Отправить" */}
            </button>
        </form>
    );
}