import Header from "./Header.jsx";
import Hero from './Hero.jsx';
import InfoBlock from "./InfoBlock.jsx";
import ContactForm from "./ContactForm.jsx";
import PriceCalculator from "./PriceCalculator.jsx";
import TelegramButton from "./TgButton.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";
import {useTranslation} from "react-i18next";


function App() {
   // const [locale, setLocale] = useLocale();
    const { t } = useTranslation();

    return (
        <>
            <Header />
            {/* Остальной контент страницы */}
            <Hero/>

            <InfoBlock title={t("InfoBlock1.title")}>
                <p>{t("InfoBlock1.content")}</p>
            </InfoBlock>

            <InfoBlock title={t("InfoBlock2.title")}>
                <ul>
                    <li>
                        <strong>{t("InfoBlock2.content.line1.title")}:</strong> {t("InfoBlock2.content.line1.content")}
                    </li>
                    <li>
                        <strong>{t("InfoBlock2.content.line2.title")}:</strong> {t("InfoBlock2.content.line2.content")}
                    </li>
                    <li>
                        <strong>{t("InfoBlock2.content.line3.title")}:</strong> {t("InfoBlock2.content.line3.content")}
                    </li>
                </ul>
            </InfoBlock>

            <InfoBlock title={t("InfoBlock3.title")}>
                <ul>
                    {t("InfoBlock3.steps", { returnObjects: true }).map((step, index) => (
                        <li key={index}>
                            <strong>{step.title}:</strong> {step.content}
                        </li>
                    ))}
                </ul>
            </InfoBlock>

            <InfoBlock title={t("ServiceArea.title")}>
                <p>{t("ServiceArea.content")}</p>
            </InfoBlock>

            <InfoBlock title={t("Advantages.title")}>
                <ul>
                    {t("Advantages.items", { returnObjects: true }).map((adv, index) => (
                        <li key={index}>
                            <strong>{adv.title}:</strong> {adv.content}
                        </li>
                    ))}
                </ul>
            </InfoBlock>

            <InfoBlock title={t("CleaningRecommendations.title")}>
                <ul>
                    {t("CleaningRecommendations.items", { returnObjects: true }).map((rec, index) => (
                        <li key={index}>
                            <strong>{rec.title}:</strong> {rec.content}
                        </li>
                    ))}
                </ul>
            </InfoBlock>

            <InfoBlock title={t("PriceList.title")}>
                <ul>
                    {t("PriceList.items", { returnObjects: true }).map((item, index) => (
                        <li key={index}>
                            {item.quantity} — {item.price}
                        </li>
                    ))}
                </ul>
                <p>{t("PriceList.note")}</p>
            </InfoBlock>

            <ContactForm/>
            <TelegramButton />
            <WhatsAppButton />
        </>
    );
}

export default App;