import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import navbarEn from "../locales/en/navbar.json";
import navbarAr from "../locales/ar/navbar.json";
import homeEn from "../locales/en/home.json";
import homeAr from "../locales/ar/home.json";
import whoWeAreEn from '../locales/en/whoWeAre.json';
import whoWeAreAr from '../locales/ar/whoWeAre.json';
import contactUsEn from '../locales/en/contactUs.json';
import contactUsAr from '../locales/ar/contactUs.json';
import faqEn from '../locales/en/faq.json';
import faqAr from '../locales/ar/faq.json';
i18n
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("language") || "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    ns: ["navbar", "home", "about", "contact", "services"],
    defaultNS: "home",
    resources: {
      en: {
        navbar: navbarEn,
        home: homeEn,
        whoWeAre: whoWeAreEn,
        contactUs: contactUsEn,
        faq: faqEn
      },
      ar: {
        navbar: navbarAr,
        home: homeAr,
        whoWeAre: whoWeAreAr,
        contactUs: contactUsAr,
        faq: faqAr
      },
    },
  });

export default i18n;
