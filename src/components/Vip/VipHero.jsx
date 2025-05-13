import heroImage from "../../assets/images/vipPage/vipHero.png";
import heroGradient from "../../assets/images/vipPage/heroGradient.png";
import vipCar from "../../assets/images/vipPage/vipCar.png";
import { Link } from "react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const VipHero = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { t } = useTranslation("vipPage");
  const images = [vipCar, vipCar, vipCar];

  return (
    <section className="bg-[#121212] text-white relative z-10">
      <div className="flex gap-5 w-full container justify-end">
        {images.map((image, idx) => (
          <div
            onClick={() => setSelectedIdx(idx)}
            key={idx}
            className={`cursor-pointer p-2 ${idx === selectedIdx ? "yellow-gradient" : " grey-gradient"}  w-[133px] h-[70px] my-8 sm:my-[56px] relative rounded-lg`}
          >
            <img src={image} className="w-[160px] absolute -right-4" />
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
          <div className="flex flex-col gap-[40px]">
            <p className="text-2xl sm:text-[32px]">{t("subtitle")}</p>
            <h1 className="font-bold text-4xl sm:text-[56px] text-vipColor">
              {t("title")}
            </h1>
            <p
              style={{ lineHeight: "1.7" }}
              className="max-w-[450px] text-lg sm:text-2xl  whitespace-pre-wrap  "
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
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-[777px] h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default VipHero;
