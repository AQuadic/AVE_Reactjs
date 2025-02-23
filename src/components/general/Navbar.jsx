import { NavLink } from 'react-router'
import Logo from '../../assets/images/navbarLogo.svg'
import global from '../../assets/images/global.svg'
import arrow from '../../assets/images/arrow_down.svg'
import toggle from '../../assets/images/toggle.svg'
import sidebarMob from '../../assets/images/sidebarMob.webp'
import closeIcon from '../../assets/images/closeIcon.svg'
import { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import "../../Hooks/i18n";

const Navbar = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation("navbar");

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenLang, setIsOpenLang] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const savedLanguage = localStorage.getItem("language") || i18n.language;
    const [language, setLanguage] = useState(savedLanguage);

    const languages = [
        { code: "en", name: "English", flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" },
        { code: "ar", name: "العربية", flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/AE.svg" },
    ];

    useEffect(() => {
        i18n.changeLanguage(language);
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
        document.body.dir = language === "ar" ? "rtl" : "ltr";
    }, [language, i18n]);

    const handleLanguageChange = (langCode) => {
        localStorage.setItem("language", langCode);
        setLanguage(langCode);
        i18n.changeLanguage(langCode);
        document.documentElement.dir = langCode === "ar" ? "rtl" : "ltr";
        document.body.dir = langCode === "ar" ? "rtl" : "ltr";
        setIsOpen(false);
    };

    return (
        <div className="md:shadow-md">
            <nav className="container z-10 relative">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto md:px-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <button className='md:hidden flex' onClick={toggleSidebar}>
                            <img src={toggle} className='w-[16.5px] h-[12.5px]' alt="Menu Icon" />
                        </button>
                        <NavLink to='/'><img src={Logo} className='md:w-[99px] md:h-[83.97px] w-12 h-12' alt="Logo" /></NavLink>
                    </div>
                    <div className={`fixed inset-y-0 ${isSidebarOpen ? 'left-0' : '-left-full'} bg-white w-64 md:hidden z-50 transition-all duration-300 ease-in-out`}>
                        <div className='flex items-center justify-between px-5'>
                            <img src={Logo} className='md:w-[99px] md:h-[83.97px] w-12 h-12' alt="Logo" />
                            <img src={closeIcon} alt="Close Icon" />

                        </div>
                        <div className="flex flex-col gap-5 font-normal text-lg rtl:space-x-reverse">
                            <NavLink to='/' className="block py-1 px-4 md:p-0 text-xs text-[#1E1E1E] transform hover:text-[#D82022] hover:underline transition-all duration-300" aria-current="page">{t('home')}</NavLink>
                            <li className='flex items-center relative px-2' onClick={toggleDropdown}>
                                <img src={arrow} className='w-3 h-3' alt="Arrow" />
                                <NavLink className="block py-2 px-3 md:p-0 text-[#1E1E1E] text-sm transform hover:text-[#D82022] hover:underline transition-all duration-300">
                                    {t('services')}
                                </NavLink>
                                {isOpen && (
                                    <ul className="absolute left-2 top-6 mt-2 bg-white border border-gray-100 rounded-md w-60 z-10">
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/vip" className="block text-sm">{t('vip')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/ambEquipmenet" className="block text-sm">{t('ambEquip')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block text-sm">{t('lab')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block text-sm">{t('clinics')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block text-sm">{t('disabilities')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block text-sm">{t('workshop')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block text-sm">{t('office')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block text-sm">{t('cafe')}</NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <NavLink to='/whoWeAre' className="block py-1 px-4 md:p-0 text-xs text-[#1E1E1E] transform hover:text-[#D82022] hover:underline transition-all duration-300">{t('whoWeAre')}</NavLink>
                            <NavLink to='/contactUs' className="block py-1 px-4 md:p-0 text-xs text-[#1E1E1E] transform hover:text-[#D82022] hover:underline transition-all duration-300">{t('contactUs')}</NavLink>
                            <NavLink to='/faqs' className="block py-1 px-4 md:p-0 text-xs text-[#1E1E1E] transform hover:text-[#D82022] hover:underline transition-all duration-300">{t('faq')}</NavLink>
                            <button type="button" data-dropdown-toggle="language-dropdown-menu" className="md:w-[125px] w-[100px] md:h-14 inline-flex gap-2 items-center justify-center px-4 py-2 text-xs text-[#1E1E1E] rounded-lg cursor-pointer">
                                <img src={global} alt="Language" />
                                <p>العربية</p>
                            </button>
                            <div className='h-px w-60 bg-[#EAEAEA] mx-auto'></div>
                            <div className='px-4 flex gap-2'>
                                <img src={sidebarMob} alt="Phone" />
                                <div>
                                    <p className='text-[#1E1E1E] text-xs'>حمل تطبيق العربية الان</p>
                                    <button className='w-[113px] h-6 rounded-sm bg-[#D82022] text-white text-xs'>حمل التطبيق</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                        <div className="relative flex items-center">
                            <button
                                type="button"
                                className="md:w-[125px] w-[100px] md:h-14 border md:inline-flex hidden gap-2 items-center justify-center px-4 py-2 text-lg font-bold text-[#1E1E1E] rounded-lg cursor-pointer"
                                onClick={() => setIsOpenLang(!isOpenLang)}
                            >
                                <img src={global} alt="Language" />
                                <p style={{ color: language === "ar" }}>{language === "ar" ? "English" : "العربية"}</p>
                            </button>

                            {isOpenLang && (
                                <div className="absolute top-12 rtl:left-0 ltr:right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-32">
                                    {languages.map((lang) => (
                                        <div
                                            key={lang.code}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                                            onClick={() => handleLanguageChange(lang.code)}
                                        >
                                            <img className="w-5" src={lang.flag} alt={lang.name} />
                                            <span>{lang.name}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className='w-20 h-6 bg-[#D820221A] rounded-sm md:hidden flex items-center justify-center'>
                            <p className='text-[#D82022] font-normal text-xs'>حمل التطبيق</p>
                        </div>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
                        <ul className="flex flex-col gap-5 font-normal p-4 md:p-0 mt-4 text-lg rtl:space-x-reverse md:flex-row">
                            <li>
                                <NavLink to='/' className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform  hover:text-[#D82022]  hover:underline transition-all duration-300" aria-current="page">{t('home')}</NavLink>
                            </li>
                            <li className='flex items-center gap-1 relative' onClick={toggleDropdown}>
                                <img src={arrow} alt="Arrow" />
                                <NavLink className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform hover:text-[#D82022] hover:underline transition-all duration-300">
                                    {t('services')}
                                </NavLink>

                                {isOpen && (
                                    <ul className="absolute left-[-50px] top-6 mt-2 bg-white border border-gray-100 rounded-md w-60 z-10">
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/vip" className="block">{t('vip')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/ambEquipmenet" className="block">{t('ambEquip')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block">{t('lab')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block">{t('clinics')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block">{t('disabilities')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block">{t('workshop')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block">{t('office')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block">{t('cafe')}</NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <NavLink to='/whoWeAre' className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform  hover:text-[#D82022]  hover:underline transition-all duration-300">{t('whoWeAre')}</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contactUs' className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform  hover:text-[#D82022]  hover:underline transition-all duration-300">{t('contactUs')}</NavLink>
                            </li>
                            <li>
                                <NavLink to='/faqs' className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform  hover:text-[#D82022]  hover:underline transition-all duration-300">{t('faq')}</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
