import { NavLink } from 'react-router'
import Logo from '../../assets/images/navbarLogo.svg'
import global from '../../assets/images/global.svg'
import arrow from '../../assets/images/arrow_down.svg'
import toggle from '../../assets/images/toggle.svg'
import { useState } from 'react'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="container mx-auto">
            <nav className="z-10 relative">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4">
                    <NavLink to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} alt="Logo" />
                    </NavLink>
                    <div className={`fixed inset-y-0 ${isSidebarOpen ? 'left-0' : '-left-full'} bg-white w-64 md:hidden z-20 transition-all duration-300 ease-in-out`}>
                        <p className='absolute top-5 left-5 font-bold border rounded-full w-5 h-5 flex items-center justify-center'>x</p>
                        <div className="flex flex-col gap-5 font-normal p-4 md:p-0 mt-4 text-lg rtl:space-x-reverse">
                            <NavLink to='/' className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform hover:text-[#D82022] hover:underline transition-all duration-300" aria-current="page">الرئيسية</NavLink>
                            <NavLink to='/whoWeAre' className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform hover:text-[#D82022] hover:underline transition-all duration-300">من نحن</NavLink>
                            <NavLink to='/contactUs' className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform hover:text-[#D82022] hover:underline transition-all duration-300">أتصل بنا</NavLink>
                            <NavLink to='/faqs' className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform hover:text-[#D82022] hover:underline transition-all duration-300">الاسئلة الشائعة</NavLink>
                        </div>
                    </div>
                    <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" data-dropdown-toggle="language-dropdown-menu" className="md:w-[125px] w-[100px] md:h-14 border md:inline-flex hidden gap-2 items-center justify-center px-4 py-2 text-lg font-bold text-[#1E1E1E] rounded-lg cursor-pointer">
                            <img src={global} alt="Language" />
                            <p>العربية</p>
                        </button>
                        <button className='md:hidden flex' onClick={toggleSidebar}>
                            <img src={toggle} alt="Menu Icon" />
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
                        <ul className="flex flex-col gap-5 font-normal p-4 md:p-0 mt-4 text-lg rtl:space-x-reverse md:flex-row">
                            <li>
                                <NavLink to='/' className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform  hover:text-[#D82022]  hover:underline transition-all duration-300" aria-current="page">الرئيسية</NavLink>
                            </li>
                            <li className='flex items-center gap-1 relative' onClick={toggleDropdown}>
                                <img src={arrow} alt="Arrow" />
                                <NavLink className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform hover:text-[#D82022] hover:underline transition-all duration-300">
                                    خدمات
                                </NavLink>

                                {isOpen && (
                                    <ul className="absolute left-[-50px] top-6 mt-2 bg-white border border-gray-100 rounded-md w-40 z-10">
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/vip" className="block">كبار الشخصيات</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/ambEquipmenet" className="block">تجهيز  إسعاف</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block">المختبر المتنقل</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block">عيادات متنقلة</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block">لذوي الهمم</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block">ورشة متنقلة</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block">مكتب متنقل</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block">مقهى</NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <NavLink to='/whoWeAre' className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform  hover:text-[#D82022]  hover:underline transition-all duration-300">من نحن</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contactUs' className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform  hover:text-[#D82022]  hover:underline transition-all duration-300">أتصل بنا</NavLink>
                            </li>
                            <li>
                                <NavLink to='/faqs' className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform  hover:text-[#D82022]  hover:underline transition-all duration-300">الاسئلة الشائعة</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
