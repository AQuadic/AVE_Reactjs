import busNeeds from "../../assets/images/businessNeeds.svg";
import line from "../../assets/images/Line.svg";
import ProcessStep from "./ProcessStep";
import { useTranslation } from "react-i18next";

const HowWeWork = () => {
  const { t } = useTranslation("home");
  return (
    <section className="mx-auto flex flex-wrap items-center justify-between md:my-[120px] mt-5">
      <div className="mx-auto">
        <div className="container flex items-center justify-center md:justify-start gap-4">
          <div className="w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm"></div>
          <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">
            {t('how')} <span className="text-[#B1060D]">{t('wework')}</span>
          </h1>
        </div>
        <div className=" w-full h-full bg-white md:mt-10 md:py-11 md:px-20">
          <section className="flex flex-wrap items-center md:justify-start justify-center lg:gap-14 gap-2">
            <ProcessStep iconSrc={busNeeds} number="01" title={t('clientNeeds')} />
            <img src={line} alt="Line" className="lg:w-[130px] h-[100px] w-[58px]" />
            <ProcessStep iconSrc={busNeeds} number="02" title={t('designandplan')} />
            <img src={line} alt="Line" className="xl:block hidden lg:w-[130px] h-[100px] w-[58px]" />
            <ProcessStep iconSrc={busNeeds} number="03" title={t('preparation')} />
            <img src={line} alt="Line" className="xl:hidden block lg:w-[130px] h-[100px] w-[58px]" />
            <ProcessStep iconSrc={busNeeds} number="04" title={t('medicalEquip')} />
            <img src={line} alt="Line" className="xl:block hidden lg:w-[130px] h-[100px] w-[58px]" />
            <ProcessStep iconSrc={busNeeds} number="05" title={t('qualityAss')} />
            <img src={line} alt="Line" className="lg:w-[130px] h-[100px] w-[58px]" />
            <ProcessStep iconSrc={busNeeds} number="06" title={t('training')} />
          </section>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
