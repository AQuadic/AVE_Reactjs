import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import certificates from "../../assets/images/certificates.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurCertificates = () => {
  const { t } = useTranslation();
  const certificatesArray = Array(4).fill(certificates);

  const settings = {
    centerMode: true,
    centerPadding: "30px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="container mx-auto mt-5 px-4">
      <div className="flex items-center  md:justify-start gap-4 mb-8">
        <div className="w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm"></div>
        <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">
          {t("ourCertificates")}
        </h1>
      </div>

      <Slider {...settings}>
        {certificatesArray.map((image, index) => (
          <div key={index} className="flex items-center justify-center px-2 my-8">
            <img
              src={image}
              alt="Certificates"
              className=" md:w-[157px] md:h-[218px] w-[79px] h-[109px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurCertificates;
