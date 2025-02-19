import { NavLink } from 'react-router'
import Logo from '../../assets/images/navbarLogo.svg'
import global from '../../assets/images/global.svg'
import arrow from '../../assets/images/arrow_down.svg'
import { useState } from 'react'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="container mx-auto">
            <nav className="">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4">
                    <NavLink to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} alt="Logo" />
                    </NavLink>
                    <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" data-dropdown-toggle="language-dropdown-menu" className="md:w-[125px] w-[100px] md:h-14 border inline-flex gap-2 items-center justify-center px-4 py-2 text-lg font-bold text-[#1E1E1E] rounded-lg cursor-pointer">
                            <img src={global} alt="Language" />
                            <p>العربية</p>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
                        <ul className="flex flex-col gap-5 font-normal p-4 md:p-0 mt-4 text-lg rtl:space-x-reverse md:flex-row">
                            <li>
                                <NavLink to='/' className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform  hover:text-[#D82022]  hover:underline transition-all duration-300" aria-current="page">الرئيسية</NavLink>
                            </li>
                            <li className='flex items-center gap-1 relative' onClick={toggleDropdown}>
                                <img src={arrow} alt="Arrow" />
                                <NavLink to="/" className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform hover:text-[#D82022] hover:underline transition-all duration-300">
                                    خدمات
                                </NavLink>

                                {isOpen && (
                                    <ul className="absolute left-[-50px] top-10 mt-2 bg-white border border-gray-100 rounded-md w-40 z-10">
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service1" className="block">Service 1</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service2" className="block">Service 2</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-200">
                                            <NavLink to="/service3" className="block">Service 3</NavLink>
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
                                <NavLink to='/' className="block py-2 px-3 md:p-0 text-[#1E1E1E] transform  hover:text-[#D82022]  hover:underline transition-all duration-300">الاسئلة الشائعة</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
