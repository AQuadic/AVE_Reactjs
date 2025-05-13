import { useState, useEffect } from "react";
import global from "../../assets/images/global.svg";
import globalYellow from "../../assets/images/globalYellow.png";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";

const Language = () => {
  const { pathname } = useLocation();
  const isVip = pathname.includes("vip");
  const { i18n } = useTranslation();
  const [isOpenLang, setIsOpenLang] = useState(false);
  const languages = [
    {
      code: "en",
      name: "English",
      flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
    },
    {
      code: "ar",
      name: "العربية",
      flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/AE.svg",
    },
  ];

  const handleLanguageChange = (langCode) => {
    localStorage.setItem("language", langCode);
    setLanguage(langCode);
    i18n.changeLanguage(langCode);
    document.documentElement.dir = langCode === "ar" ? "rtl" : "ltr";
    document.body.dir = langCode === "ar" ? "rtl" : "ltr";
    setIsOpenLang(false);
  };

  const savedLanguage = localStorage.getItem("language") || i18n.language;
  const [language, setLanguage] = useState(savedLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.dir = language === "ar" ? "rtl" : "ltr";
  }, [language, i18n]);

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        className={`md:w-[125px] w-[100px] md:h-14 border ${isVip ? "md:border-vipColor" : "md:border"} flex gap-2 items-center justify-center px-4 py-2 md:text-lg text-xs md:font-bold  rounded-lg cursor-pointer`}
        onClick={() => setIsOpenLang(!isOpenLang)}
      >
        <img src={isVip ? globalYellow : global} alt="Language" width={24} />
        <p className={`${isVip ? "text-vipColor" : "text-white"}`}>
          {language === "ar" ? "English" : "العربية"}
        </p>
      </button>

      {isOpenLang && (
        <div
          className={`absolute top-12 rtl:md:left-0 ltr:md:right-0 ltr:left-4 rtl:right-4 ${isVip ? "bg-[#1E1E1E] text-white" : "bg-white text-[#1E1E1E]"}   rounded-lg shadow-lg z-10 w-32`}
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={`px-4 py-2 ${isVip ? "hover:bg-neutral-700" : "hover:bg-gray-100"} cursor-pointer flex items-center gap-2`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <img className="w-5" src={lang.flag} alt={lang.name} />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Language;
