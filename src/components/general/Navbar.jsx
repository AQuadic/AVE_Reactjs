import { NavLink, useLocation } from "react-router";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

import Logo from "../../assets/images/navbarLogo.svg";
import VipLogo from "../../assets/images/vipPage/vipLogo.png";
// import arrow from "../../assets/images/arrow_down.svg";
import toggle from "../../assets/images/toggle.svg";
import toggleWhite from "../../assets/images/toggleWhite.svg";
import sidebarMob from "../../assets/images/sidebarMob.webp";
import closeIcon from "../../assets/images/closeIcon.svg";

import "../../Hooks/i18n";
import Language from "./Language";

const Navbar = () => {
  const { t } = useTranslation("navbar");
  const { pathname } = useLocation();
  const isVip = pathname.includes("vip");

  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleDropdownClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleDropdownClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleDropdownClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleSidebarClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleSidebarClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleSidebarClickOutside);
    };
  }, [isSidebarOpen]);

  const servicesDropdown = [
    { route: "/vip", label: "vip" },
    { route: "/ambEquipmenet", label: "ambEquip" },
    { route: "/lab", label: "lab" },
    { route: "/clinics", label: "clinics" },
    // { route: "/service3", label: "disabilities" },
    // { route: "/service3", label: "workshop" },
    { route: "/office", label: "office" },
    { route: "/coffee", label: "cafe" },
    { route: "/icecream", label: "icecream" },
  ];

  const renderServicesDropdown = (isMobile = true) => (
    <ul
      ref={dropdownRef}
      className={`absolute ${isMobile ? "left-2" : "left-[-50px]"} top-6 mt-2 ${
        isVip ? "bg-[#1E1E1E]" : "bg-white"
      } rounded-md w-60 z-10`}
    >
      {servicesDropdown.map((service, index) => (
        <li
          key={index}
          className={`px-4 py-2 ${isVip ? "hover:bg-vipColor" : "hover:bg-[#D82022]"}`}
        >
          <NavLink to={service.route} className="block">
            {t(service.label)}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`md:shadow-md ${isVip ? "bg-[#1E1E1E] text-white" : "bg-white text-[#1E1E1E]"}`}
    >
      <nav className="container z-20 relative">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto md:px-4">
          {/* Mobile Menu Button and Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <button className="md:hidden flex" onClick={toggleSidebar}>
              <img
                src={isVip ? toggleWhite : toggle}
                className="w-[16.5px] h-[12.5px]"
                alt="Menu Icon"
              />
            </button>
            <NavLink to="/">
              <img
                src={isVip ? VipLogo : Logo}
                className="md:w-[99px] md:h-[83.97px] w-12 h-12 p-2"
                alt="Logo"
              />
            </NavLink>
          </div>

          {/* Mobile Sidebar */}
          <div
            ref={sidebarRef}
            className={`fixed inset-y-0 ${isSidebarOpen ? "left-0" : "-left-full"} ${isVip ? "bg-[#1E1E1E]" : "bg-white"} w-64 md:hidden z-50 transition-all duration-300 ease-in-out`}
          >
            <div className="flex items-center justify-between px-5">
              <img
                src={Logo}
                className="md:w-[99px] md:h-[83.97px] w-12 h-12"
                alt="Logo"
              />
              <img src={closeIcon} alt="Close Icon" onClick={toggleSidebar} />
            </div>
            <div className="flex flex-col gap-5 font-normal text-lg rtl:space-x-reverse">
              <NavLink
                to="/"
                className={`block py-1 px-4 md:p-0 text-xs transform ${isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"} hover:underline transition-all duration-300`}
                aria-current="page"
              >
                {t("home")}
              </NavLink>
              <li
                className="flex items-center relative px-2"
                onClick={toggleDropdown}
              >
                {isVip ? <ChevronDown color="white" /> : <ChevronDown />}
                <NavLink
                  className={`block px-2 md:p-0 text-sm transform ${isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"} hover:underline transition-all duration-300`}
                >
                  {t("services")}
                </NavLink>
                {isOpen && renderServicesDropdown(true)}
              </li>
              <NavLink
                to="/whoWeAre"
                className={`block py-1 px-4 md:p-0 text-xs transform ${isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"} hover:underline transition-all duration-300`}
              >
                {t("whoWeAre")}
              </NavLink>
              <NavLink
                to="/contactUs"
                className={`block py-1 px-4 md:p-0 text-xs transform ${isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"} hover:underline transition-all duration-300`}
              >
                {t("contactUs")}
              </NavLink>
              <NavLink
                to="/faqs"
                className={`block py-1 px-4 md:p-0 text-xs transform ${isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"} hover:underline transition-all duration-300`}
              >
                {t("faq")}
              </NavLink>
              <Language />
              <div className="h-px w-60 bg-[#EAEAEA] mx-auto"></div>
              <div className="px-4 flex gap-2">
                <img src={sidebarMob} alt="Phone" />
                <div>
                  <p className="text-xs">{t("arabicDownload")}</p>
                  <button className="w-[113px] h-6 rounded-sm bg-[#D82022] text-white text-xs">
                    {t("downloadApp")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Language and Mobile Download Button */}
          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <div className="md:inline-flex hidden">
              <Language />
            </div>
            <div className="w-20 h-6 bg-[#D820221A] rounded-sm md:hidden flex items-center justify-center">
              <p className="text-[#D82022] font-normal text-xs">
                {t("downloadApp")}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul className="flex flex-col gap-5 font-normal p-4 md:p-0 mt-4 text-lg rtl:space-x-reverse md:flex-row">
              <li>
                <NavLink
                  to="/"
                  className={`block py-2 px-3 md:p-0 transform ${isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"} hover:underline transition-all duration-300`}
                  aria-current="page"
                >
                  {t("home")}
                </NavLink>
              </li>
              <li
                className="flex items-center gap-1 relative"
                onClick={toggleDropdown}
              >
                <ChevronDown color={isVip ? "white" : "black"} />
                <NavLink
                  className={`block py-2 px-3 md:p-0 transform ${isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"} hover:underline transition-all duration-300`}
                >
                  {t("services")}
                </NavLink>
                {isOpen && renderServicesDropdown()}
              </li>
              <li>
                <NavLink
                  to="/whoWeAre"
                  className={`block py-2 px-3 md:p-0 transform ${isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"} hover:underline transition-all duration-300`}
                >
                  {t("whoWeAre")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactUs"
                  className={`block py-2 px-3 md:p-0 transform ${isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"} hover:underline transition-all duration-300`}
                >
                  {t("contactUs")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faqs"
                  className={`block py-2 px-3 md:p-0 transform ${isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"} hover:underline transition-all duration-300`}
                >
                  {t("faq")}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
