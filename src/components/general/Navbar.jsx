import { NavLink, useLocation } from "react-router";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

import Logo from "../../assets/images/navbarLogo.svg";
import enLogo from "@/assets/images/home/enLogo.svg";

// import VipLogo from "../../assets/images/vipPage/vipLogo.png";
import toggle from "../../assets/images/toggle.svg";
import toggleWhite from "../../assets/images/toggleWhite.svg";
import sidebarMob from "../../assets/images/sidebarMob.webp";
import closeIcon from "../../assets/images/closeIcon.svg";

import vipArLogo from "../../assets/images/vipPage/vipArLogo.jpeg";
import vipEnLogo from "../../assets/images/vipPage/vipEnLogo.png";

import "../../Hooks/i18n";
import Language from "./Language";
import i18n from "i18next";

const Navbar = () => {
  const { t } = useTranslation("navbar");
  const { pathname } = useLocation();
  const isVip = pathname.includes("vip");

  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleMobileLinkClick = () => {
    setIsSidebarOpen(false);
    setIsOpen(false);
  };

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const servicesDropdown = [
    {
      route: "/healthCare",
      label: "care",
      submenu: [
        { label: t("ambEquipCare"), route: "" },
        { label: t("clinicCare"), route: "" },
        { label: t("laboratory"), route: "" },
        { label: t("ramp"), route: "" },
      ],
    },
    {
      route: "/ambEquipmenet",
      label: "mobileLaboratories",
      submenu: [
        { label: t("waterLabs"), route: "" },
        { label: t("gasLabs"), route: "" },
        { label: t("military"), route: "" },
      ],
    },
    {
      route: "",
      label: "workshops",
      submenu: [{ label: t("workshopsDesc"), route: "" }],
    },
    {
      route: "",
      label: "vet",
    },
    {
      route: "",
      label: "rest",
    },
    {
      route: "/coffee",
      label: "coffeShop",
    },
    {
      route: "/office",
      label: "officeCall",
    },
    {
      route: "",
      label: "police",
    },
    {
      route: "",
      label: "plans",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setHoveredIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderServicesDropdown = (isMobile = true) => (
    <ul
      ref={isMobile ? null : dropdownRef}
      className={`absolute ${isMobile ? "left-2" : "left-[-50px]"} top-6 mt-2 ${
        isVip ? "bg-[#1E1E1E]" : "bg-white"
      } rounded-md w-72 z-10 `}
    >
      {servicesDropdown.map((service, index) => (
        <li
          key={index}
          className={`relative px-4 py-2 ${
            isVip ? "hover:bg-vipColor" : "hover:bg-[#D82022] hover:text-white"
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink
            to={service.route}
            className="block"
            onClick={isMobile ? handleMobileLinkClick : undefined}
          >
            {t(service.label)}
          </NavLink>

          {hoveredIndex === index && service.submenu && (
            <ul className="absolute rtl:right-full ltr:left-full top-0 mt-0 ml-2 w-full py-2 bg-white text-black rounded-md shadow-lg z-20">
              {service.submenu.map((item, subIndex) => (
                <li key={subIndex} className="px-3 py-2 hover:bg-gray-200">
                  <NavLink
                    to={item.route}
                    className="block text-sm"
                    onClick={isMobile ? handleMobileLinkClick : undefined}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`md:shadow-md ${
        isVip ? "bg-[#1E1E1E] text-white" : "bg-white text-[#1E1E1E]"
      }`}
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
                src={
                  isVip
                    ? i18n.language === "ar"
                      ? vipArLogo
                      : vipEnLogo
                    : i18n.language === "ar"
                      ? Logo
                      : enLogo
                }
                className={`${
                  isVip
                    ? "md:w-[150px] md:h-[93.97px]"
                    : "md:w-[99px] md:h-[83.97px]"
                }   p-2`}
                alt="Logo"
              />
            </NavLink>
          </div>

          {/* Mobile Sidebar */}
          <div
            ref={sidebarRef}
            className={`fixed inset-y-0 ${
              isSidebarOpen ? "left-0" : "-left-full"
            } ${isVip ? "bg-[#1E1E1E]" : "bg-white"} w-64 md:hidden z-50 transition-all duration-300 ease-in-out`}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <img src={Logo} className="w-12 h-12" alt="Logo" />
              <img
                src={closeIcon}
                alt="Close Icon"
                className="cursor-pointer"
                onClick={toggleSidebar}
              />
            </div>
            <div className="flex flex-col gap-5 font-normal text-lg rtl:space-x-reverse px-4">
              <NavLink
                to="/"
                onClick={handleMobileLinkClick}
                className={`block text-xs transform ${
                  isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"
                } hover:underline transition-all duration-300`}
              >
                {t("home")}
              </NavLink>
              <NavLink
                to="/vip"
                onClick={handleMobileLinkClick}
                className={`block text-xs transform ${
                  isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"
                } hover:underline transition-all duration-300`}
              >
                {t("VIP")}
              </NavLink>
              <li
                className="flex items-center relative"
                onClick={toggleDropdown}
              >
                {isVip ? <ChevronDown color="white" /> : <ChevronDown />}
                <NavLink
                  className={`block px-2 text-sm transform ${
                    isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"
                  } hover:underline transition-all duration-300`}
                >
                  {t("services")}
                </NavLink>
                {isOpen && renderServicesDropdown(true)}
              </li>
              <NavLink
                to="/whoWeAre"
                onClick={handleMobileLinkClick}
                className={`block text-xs transform ${
                  isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"
                } hover:underline transition-all duration-300`}
              >
                {t("whoWeAre")}
              </NavLink>
              <NavLink
                to="/contactUs"
                onClick={handleMobileLinkClick}
                className={`block text-xs transform ${
                  isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"
                } hover:underline transition-all duration-300`}
              >
                {t("contactUs")}
              </NavLink>
              <NavLink
                to="/faqs"
                onClick={handleMobileLinkClick}
                className={`block text-xs transform ${
                  isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"
                } hover:underline transition-all duration-300`}
              >
                {t("faq")}
              </NavLink>

              <Language />
              <div className="h-px w-60 bg-[#EAEAEA] mx-auto"></div>
              <div className="flex gap-2 items-center">
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
          <div className="flex items-center md:order-2">
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
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col gap-5 font-normal p-4 md:p-0 mt-4 text-lg rtl:space-x-reverse md:flex-row">
              <li>
                <NavLink
                  to="/"
                  className={`block py-2 px-3 md:p-0 transform ${
                    isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"
                  } hover:underline transition-all duration-300`}
                >
                  {t("home")}
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  to="/vip"
                  className={`block py-2 px-3 md:p-0 transform ${
                    isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"
                  } hover:underline transition-all duration-300`}
                >
                  {t("VIP")}
                </NavLink>
              </li>
              <li
                className="flex items-center gap-1 relative"
                onClick={toggleDropdown}
              >
                <ChevronDown color={isVip ? "white" : "black"} />
                <NavLink
                  className={`block py-2 px-3 md:p-0 transform ${
                    isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"
                  } hover:underline transition-all duration-300`}
                >
                  {t("products")}
                </NavLink>
                {isOpen && renderServicesDropdown(false)}
              </li>
              <li>
                <NavLink
                  to="/whoWeAre"
                  className={`block py-2 px-3 md:p-0 transform ${
                    isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"
                  } hover:underline transition-all duration-300`}
                >
                  {t("whoWeAre")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactUs"
                  className={`block py-2 px-3 md:p-0 transform ${
                    isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"
                  } hover:underline transition-all duration-300`}
                >
                  {t("contactUs")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faqs"
                  className={`block py-2 px-3 md:p-0 transform ${
                    isVip ? "hover:text-vipColor" : "hover:text-[#D82022]"
                  }  hover:underline transition-all duration-300`}
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
