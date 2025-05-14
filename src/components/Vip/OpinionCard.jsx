import clientImg from "@/assets/images/clientImg.webp";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const OpinionCard = ({ isGolden }) => {
  const { t } = useTranslation("home");
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div
      className={`w-full max-w-[600px] m-5 p-6 ${isGolden ? "yellow-gradient text-white" : "bg-white text-black"} rounded-xl`}
    >
      <p className="text-[#505050] lg:text-2xl text-base lg:font-bold font-normal md:w-[570px] mt-4">
        {t("headTitle")}
        {showMore && <span> {t("headTitle")}</span>}
        <span
          className="text-[#D82022] cursor-pointer"
          onClick={toggleShowMore}
        >
          {" "}
          {showMore ? t("readLess") : t("readMore")}
        </span>
      </p>
      <div className="flex justify-between">
        <div className="flex items-center gap-4"></div>
        <div className="flex items-center mt-2">
          <p className="text-[#121212] font-bold ms-2">(5)</p>
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-300 "
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpinionCard;
