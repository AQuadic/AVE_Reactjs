import certificates from "../../assets/images/certificates.webp";
import { useTranslation } from "react-i18next";
const OurCertificates = () => {
  const { t } = useTranslation();
  const certificatesArray = Array(4).fill(certificates);
  return (
    <section className="container mx-auto flex flex-wrap items-center justify-between md:mt-[640px] mt-5">
      <div className="">
        <div className="flex items-center justify-center md:justify-start gap-4">
          <div className="w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm"></div>
          <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">
            {t("ourCertificates")}
          </h1>
        </div>
        <div className="md:mt-[35px] p-5 lg:px-60 flex items-center justify-center md:gap-12 gap-2">
          {certificatesArray.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Certificates"
              className="md:w-[157px] md:h-[218px] w-[79px] h-[109px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCertificates;
