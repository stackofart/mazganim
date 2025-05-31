// src/components/ContactForm.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ContactForm.css";

export default function ContactForm() {
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [phoneError, setPhoneError] = useState("");

    const validatePhone = (value) => {
        const localRegex = /^05\d{8}$/;
        const intlRegex = /^\+9725\d{8}$/;
        if (localRegex.test(value) || intlRegex.test(value)) {
            return "";
        } else {
            return t("ContactForm.validationError");
            /* добавьте в перевод ключ:
               "phone_validation_error":
                  "Номер телефона должен быть либо 10 цифр..."
            */
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorMsg = validatePhone(phone.trim());
        if (errorMsg) {
            setPhoneError(errorMsg);
            return;
        }
        setPhoneError("");
        setIsSubmitted(true);
        setName("");
        setPhone("");
    };

    if (isSubmitted) {
        return (
            <div id="contact" className="contact-form contact-form--success">
                <p className="contact-form__success-text">
                    {t("Feedback.success")}
                </p>
            </div>
        );
    }

    return (
        <form id="contact" className="contact-form" onSubmit={handleSubmit} noValidate>
            <h3 className="contact-form__title">{t("Feedback.title")}</h3>

            <label htmlFor="contact-name" className="contact-form__label">
                {t("ContactForm.labelName")}:
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
            </label>
            <input
                id="contact-phone"
                type="text"
                className={`contact-form__input ${
                    phoneError ? "contact-form__input--error" : ""
                }`}
                placeholder={t("ContactForm.labelPhone")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            {phoneError && <p className="contact-form__error">{phoneError}</p>}

            <button type="submit" className="contact-form__btn">
                {t("ContactForm.submit")}
            </button>
        </form>
    );
}