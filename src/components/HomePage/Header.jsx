import { useTranslation } from "react-i18next";
import heroImage from "../../assets/images/home/heroImage.png";

const Header = () => {
  const { t } = useTranslation("home");
  return (
    <header className="container md:h-80">
      <div className="">
        <section className="flex flex-col items-center animate__animated animate__bounceInRight md:my-[30px] md:order-1 order-2 mt-8  mb-12 md:mb-0 md:mt-14 text-center md:text-start">
          <h1 className="md:font-normal font-bold lg:text-[56px] text-xl text-[#1E1E1E] lg:leading-[56px]">
            {t("arabic")}{" "}
            <span className="text-[#B1060D]"> {t("Vehicle")} </span>
            {t("Equipment")}
          </h1>
          <p className="text-[#505050] lg:text-2xl text-sm md:font-normal font-bold md:mt-6 mt-2 lg:!leading-[40px] text-center max-w-[1000px]">
            {t("headTitle")}
          </p>
          <div className=" md:mt-8 mt-6 flex md:gap-10 gap-6">
            <button
              type="button"
              className="  lg:w-[215px] w-[160px] md:h-14 h-12 bg-[#D82022] text-white font-bold text-lg rounded-sm"
            >
              {t("prepareCar")}
            </button>
            <button
              type="button"
              className="lg:w-[215px] w-[160px] md:h-14 h-12 border border-[#D82022] text-[#D82022] font-bold text-lg rounded-sm"
            >
              {t("buyCar")}
            </button>
          </div>
        </section>
        <img src={heroImage} alt="hero" />
      </div>
    </header>
  );
};

export default Header;
