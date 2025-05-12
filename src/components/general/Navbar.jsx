import { NavLink } from 'react-router'
import Logo from '../../assets/images/navbarLogo.svg'
import arrow from '../../assets/images/arrow_down.svg'
import toggle from '../../assets/images/toggle.svg'
import sidebarMob from '../../assets/images/sidebarMob.webp'
import closeIcon from '../../assets/images/closeIcon.svg'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import "../../Hooks/i18n";
import Language from './Language'

const Navbar = () => {
    const { t } = useTranslation("navbar");

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, setIsOpen]);


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
                            <img src={closeIcon} alt="Close Icon" onClick={toggleSidebar} />
                        </div>
                        <div className="flex flex-col gap-5 font-normal text-lg rtl:space-x-reverse">
                            <NavLink to='/' className="block py-1 px-4 md:p-0 text-xs text-[#1E1E1E] transform hover:text-[#D82022] hover:underline transition-all duration-300" aria-current="page">{t('home')}</NavLink>
                            <li className='flex items-center relative px-2' onClick={toggleDropdown}>
                                <img src={arrow} className='w-3 h-3' alt="Arrow" />
                                <NavLink className="block px-2 md:p-0 text-[#1E1E1E] text-sm transform hover:text-[#D82022] hover:underline transition-all duration-300">
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
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/icecream" className="block">{t('icecream')}</NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <NavLink to='/whoWeAre' className="block py-1 px-4 md:p-0 text-xs text-[#1E1E1E] transform hover:text-[#D82022] hover:underline transition-all duration-300">{t('whoWeAre')}</NavLink>
                            <NavLink to='/contactUs' className="block py-1 px-4 md:p-0 text-xs text-[#1E1E1E] transform hover:text-[#D82022] hover:underline transition-all duration-300">{t('contactUs')}</NavLink>
                            <NavLink to='/faqs' className="block py-1 px-4 md:p-0 text-xs text-[#1E1E1E] transform hover:text-[#D82022] hover:underline transition-all duration-300">{t('faq')}</NavLink>
                            <Language />
                            <div className='h-px w-60 bg-[#EAEAEA] mx-auto'></div>
                            <div className='px-4 flex gap-2'>
                                <img src={sidebarMob} alt="Phone" />
                                <div>
                                    <p className='text-[#1E1E1E] text-xs'>{t('arabicDownload')}</p>
                                    <button className='w-[113px] h-6 rounded-sm bg-[#D82022] text-white text-xs'>{t('downloadApp')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                        <div className='md:inline-flex hidden'>
                            <Language />
                        </div>
                        <div className='w-20 h-6 bg-[#D820221A] rounded-sm md:hidden flex items-center justify-center'>
                            <p className='text-[#D82022] font-normal text-xs'>{t('downloadApp')}</p>
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
                                    <ul ref={dropdownRef} className="absolute left-[-50px] top-6 mt-2 bg-white border border-gray-100 rounded-md w-60 z-10">
                                        <li className="px-4 py-2 hover:bg-[#D82022]">
                                            <NavLink to="/vip" className="block">{t('vip')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-[#D82022]">
                                            <NavLink to="/ambEquipmenet" className="block">{t('ambEquip')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-[#D82022]">
                                            <NavLink to="/lab" className="block">{t('lab')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-[#D82022]">
                                            <NavLink to="/clinics" className="block">{t('clinics')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-[#D82022]">
                                            <NavLink to="/service3" className="block">{t('disabilities')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-[#D82022]">
                                            <NavLink to="/service3" className="block">{t('workshop')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-[#D82022]">
                                            <NavLink to="/office" className="block">{t('office')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-[#D82022]">
                                            <NavLink to="/coffee" className="block">{t('cafe')}</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-[#D82022]">
                                            <NavLink to="/icecream" className="block">{t('icecream')}</NavLink>
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
