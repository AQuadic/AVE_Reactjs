import healthCareImg from "@/assets/images/HealthCare/healthCareImg.png";
import healthCareImgAr from "@/assets/images/HealthCare/arabicHeader.png";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { i18n } = useTranslation();
  return (
    <section className="">
      <div>
        <img
          src={i18n.language === "en" ? healthCareImg : healthCareImgAr}
          className="w-full md:mt-20 mt-5"
          alt="Image"
        />
      </div>
    </section>
  );
};

export default Header;
