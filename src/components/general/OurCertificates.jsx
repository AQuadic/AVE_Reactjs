import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import certificates from "../../assets/images/certificates.webp";

const OurCertificates = () => {
  const { t } = useTranslation();
  const certificatesArray = Array(4).fill(certificates);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.86,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <section className="container px-4 mx-auto mt-5 pb-14">
      <div className="flex items-center gap-4 mb-8 md:justify-start">
        <div className="w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm"></div>
        <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">
          {t("ourCertificates")}
        </h1>
      </div>

      <Slider {...settings} className="red-dots">
        {certificatesArray.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-2 md:my-8"
          >
            <img
              src={image}
              alt="Certificates"
              className=" md:w-[270px] md:h-[375px] w-[163px] h-[228px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurCertificates;
