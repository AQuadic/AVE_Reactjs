import heroImage from "../../assets/images/vipPage/vipHero.png";
import heroGradient from "../../assets/images/vipPage/heroGradient.png";
import vipCar from "../../assets/images/vipPage/vipCar.png";
import carShadow from "../../assets/images/vipPage/carShadow.png";
import vipArrowRight from "../../assets/images/vipPage/vipArrowRight.svg";
import vipArrowLeft from "../../assets/images/vipPage/vipArrowLeft.svg";
import { Link } from "react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const VipHero = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { t, i18n } = useTranslation("vipPage");

  const imagesThumbnails = [vipCar, vipCar, vipCar];
  const images = [heroImage, heroImage, heroImage];

  const handleNextImage = () => {
    setSelectedIdx((prevIdx) => (prevIdx + 1) % imagesThumbnails.length);
  };

  const handlePrevImage = () => {
    setSelectedIdx(
      (prevIdx) =>
        (prevIdx - 1 + imagesThumbnails.length) % imagesThumbnails.length,
    );
  };

  return (
    <section className="relative z-10">
      <div className="flex gap-5 w-full container justify-end">
        {imagesThumbnails.map((image, idx) => (
          <div
            onClick={() => setSelectedIdx(idx)}
            key={idx}
            className={`cursor-pointer p-2 ${idx === selectedIdx ? "yellow-gradient" : "grey-gradient"} w-[133px] h-[70px] my-8 relative rounded-lg`}
          >
            <img
              src={image}
              className="w-[160px] absolute -right-4 transform ltr:scale-x-[-1]"
            />
          </div>
        ))}
      </div>

      <div>
        <img
          src={heroGradient}
          className="absolute -top-64 left-0 -z-20"
          alt=""
        />
        <div className="container flex justify-between max-md:flex-col">
          <div className="flex flex-col gap-[40px] relative z-10">
            <p className="text-2xl sm:text-[32px]">{t("subtitle")}</p>
            <h1 className="font-bold text-4xl sm:text-[56px] text-vipColor">
              {t("title")}
            </h1>
            <p
              style={{ lineHeight: "1.7" }}
              className="max-w-[450px] text-lg sm:text-2xl whitespace-pre-wrap"
            >
              {t("description")}
            </p>
            <Link
              className="hover:text-black hover:bg-white mt-4 text-lg font-bold px-7 py-3 border self-start rounded-md border-vipColor"
              to="/contactUs"
            >
              {t("button")}
            </Link>
          </div>

          {/* Animated Hero Image */}
          <div className="relative w-full max-w-[777px] h-full z-20">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedIdx}
                src={images[selectedIdx]}
                alt="Hero"
                initial={{
                  opacity: 0,
                  x: 100,
                  scaleX: i18n.language === "en" ? -1 : 1,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scaleX: i18n.language === "en" ? -1 : 1,
                }}
                exit={{
                  opacity: 0,
                  x: -100,
                  scaleX: i18n.language === "en" ? -1 : 1,
                }}
                transition={{ duration: 0.5 }}
                className="w-full h-auto transform scale-x-[-1]"
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-0 sm:bottom-20 z-0">
          <img
            src={carShadow}
            alt="Car Shadow"
            className="h-[96px] w-screen transform ltr:scale-x-[-1]"
          />
        </div>
        <div className="flex items-center gap-12 absolute bottom-5 sm:bottom-[100px] w-full container right-1/2 translate-x-1/2 z-[999]">
          <button onClick={handlePrevImage}>
            <img
              src={vipArrowRight}
              className="relative transform ltr:scale-x-[-1]"
            />
          </button>
          <button onClick={handleNextImage}>
            <img src={vipArrowLeft} className="transform ltr:scale-x-[-1]" />
          </button>{" "}
        </div>
      </div>
    </section>
  );
};

export default VipHero;
