import Logo from "../../assets/images/navbarLogo.svg";
import enLogo from "@/assets/images/home/enLogo.svg";

import check from "../../assets/images/check.svg";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import FacebookIcon from "../icons/home/FacebookIcon";
// import YoutubeIcon from "../icons/home/YoutubeIcon";
import WhatsappIcon from "../icons/home/WhatsappIcon";
import InstaIcon from "../icons/home/InstaIcon";
// import LinkedInIcon from "../icons/home/LinkedInIcon";
// import TwitterIcon from "../icons/home/TwitterIcon";
import i18n from "i18next";
import Tiktok from "../icons/home/Tiktok";

import vipArLogo from "../../assets/images/vipPage/vipArLogo.jpeg";
import vipEnLogo from "../../assets/images/vipPage/vipEnLogo.png";

const Footer = () => {
  const { t } = useTranslation("navbar");
  const isVip = window.location.pathname.includes("/vip");
  console.log(isVip);
  ;

  return (
    <div className="relative">
      <footer className="bg-[#1E1E1E]">
        <div className="container w-full p-4 py-6 max-w-screen-2xl lg:py-8">
          <div className="xl:flex xl:gap-32 lg:gap-20">
            <div className="mb-6 md:mb-0">
              <Link
                to="/"
                className="flex items-center justify-center md:justify-start rtl:flex p-2 max-w-[150px]"
              >
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
                  alt="Logo"
                />
              </Link>

              <p className="md:w-[373px] text-base leading-6 text-white md:text-start text-center">
                {t("paragraph")}
              </p>
              <div className="md:w-[373px] text-base leading-6 text-white md:text-start text-center mt-4">
                <p>
                  62 Central Axis Street - Extension of the Sixth Industrial
                  Zone - 6th of October - Giza
                </p>
              </div>
              <div className="flex flex-col gap-1 mt-4 text-base leading-6 text-center text-white  md:text-start">
                <a
                  href="https://wa.me/20109000638"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  01009000638
                </a>
                <a
                  href="https://wa.me/201200127070"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  01200127070
                </a>
              </div>

              <div className="flex items-center md:justify-start justify-center gap-3 mt-[18px]">
                <Link to="https://www.facebook.com/alarabiave">
                  <FacebookIcon />
                </Link>
                <Link to="https://www.instagram.com/alarabia_ave">
                  <InstaIcon />
                </Link>
                <a
                  href="https://wa.me/201009000638"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappIcon />
                </a>
                <Link to="https://www.tiktok.com/@ave_alarbia">
                  <Tiktok />
                </Link>
                {/* <Link to="">
                                    <YoutubeIcon />
                                </Link>
                                <Link to="">
                                    <LinkedInIcon />
                                </Link>
                                <Link to="">
                                    <TwitterIcon />
                                </Link> */}
              </div>
            </div>
            <div className="flex flex-col mt-5 md:flex-row rtl:lg:gap-20 ltr:lg:gap-12 md:gap-5 xl:mt-0">
              <div className="">
                <h2 className="text-2xl font-semibold text-center text-white lg:text-start">
                  {t("services")}
                </h2>
                <div className="w-6 h-1 bg-[#ED1C24] rounded-sm mt-4 mb-2 mx-auto lg:mx-0"></div>
                <ul className="flex flex-col justify-center gap-3 text-base font-normal text-white md:flex-row">
                  <div className="flex flex-col items-center order-2 md:order-2 md:items-start">
                    <li className="mb-4 flex items-center gap-[9px]">
                      <img
                        src={check}
                        alt="Check"
                        className="hidden md:block"
                      />
                      <Link to="/">{t("disabilities")}</Link>
                    </li>
                    <li className="mb-4 flex items-center gap-[9px]">
                      <img
                        src={check}
                        alt="Check"
                        className="hidden md:block"
                      />
                      <Link to="/">{t("clinics")}</Link>
                    </li>
                    {/* <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='hidden md:block' />
                                            <Link to='/' >{t('workshop')}</Link>
                                        </li> */}
                    <li className="mb-4 flex items-center gap-[9px]">
                      <img
                        src={check}
                        alt="Check"
                        className="hidden md:block"
                      />
                      <Link to="/">{t("cafe")}</Link>
                    </li>
                  </div>
                  <div className="flex flex-col items-center order-1 md:order-1 md:items-start">
                    <li className="mb-4 flex items-center gap-[9px]">
                      <img
                        src={check}
                        alt="Check"
                        className="hidden md:block"
                      />
                      <Link to="/">{t("lab")}</Link>
                    </li>
                    <li className="mb-4 flex items-center gap-[9px]">
                      <img
                        src={check}
                        alt="Check"
                        className="hidden md:block"
                      />
                      <Link to="/ambEquipmenet">{t("ambEquip")}</Link>
                    </li>
                    <li className="mb-4 flex items-center gap-[9px]">
                      <img
                        src={check}
                        alt="Check"
                        className="hidden md:block"
                      />
                      <Link to="/vip">{t("vip")}</Link>
                    </li>
                    <li className="mb-4 flex items-center gap-[9px]">
                      <img
                        src={check}
                        alt="Check"
                        className="hidden md:block"
                      />
                      <Link to="/">{t("workshop")}</Link>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-white">
                  {t("company")}
                </h2>
                <div className="w-6 h-1 bg-[#ED1C24] rounded-sm mt-4 mb-2"></div>
                <ul className="flex flex-col items-center text-base font-normal text-white">
                  <li className="mb-4 flex items-center gap-[9px]">
                    <Link to="/whoWeAre">{t("whoWeAre")}</Link>
                  </li>
                  <li className="mb-4 flex items-center gap-[9px]">
                    <Link to="/contactUs">{t("contactUs")}</Link>
                  </li>
                  <li className="mb-4 flex items-center gap-[9px]">
                    <Link to="/faqs">{t("faq")}</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-white">
                  {t("legal")}
                </h2>
                <div className="w-6 h-1 bg-[#ED1C24] rounded-sm mt-4 mb-2"></div>
                <ul className="flex flex-col items-center text-base font-normal text-white">
                  <li className="mb-4 flex items-center gap-[9px]">
                    <Link to="/terms">{t("terms")}</Link>
                  </li>
                  <li className="mb-4 flex items-center gap-[9px]">
                    <Link to="/privacy">{t("privacy")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
