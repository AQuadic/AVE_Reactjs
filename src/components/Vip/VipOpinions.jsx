import OpinionCard from "@/components/Vip/OpinionCard.jsx";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import certificates from "../../assets/images/certificates.webp";

const VipOpinions = () => {
  const { t } = useTranslation("home");
  const certificatesArray = Array(4).fill(certificates);

  // Apply custom styles for yellow dots
  useEffect(() => {
    // Add custom CSS for yellow dots
    const style = document.createElement("style");
    style.innerHTML = `
      .yellow-dots .slick-dots li button:before {
        color: #DDB611 !important;
      }
      .yellow-dots .slick-dots li.slick-active button:before {
        color: #DDB611 !important;
        opacity: 1;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: "0",

    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2, // still show 2 if space allows
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1, // show 1 full card on mobile
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 480, // small mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <section className="container px-4 py-12 mx-auto mt-5 pb-14">
      <h2 className="flex items-center gap-2">
        <div className="w-1 h-10 bg-vipColor"></div>
        <span className="text-2xl sm:text-[40px] py-12">
          {" "}
          {t("reviews")} <span>{t("client")}</span>
        </span>
      </h2>

      <Slider {...settings} className="yellow-dots">
        {certificatesArray.map((_, index) => (
          <OpinionCard key={index} isGolden={index === 1} />
        ))}
      </Slider>
    </section>
  );
};

export default VipOpinions;
