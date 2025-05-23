// import check from '../../../assets/images/red_check.svg'
import { useTranslation } from "react-i18next";
import redLine from '@/assets/images/home/redLine.png'
import clinic1 from '@/assets/images/Clinics/clinic1.png'
import clinic2 from '@/assets/images/Clinics/clinic2.png'
import GreenCar from '../../../assets/images/Clinics/Car.png'
const Content = () => {
    const { t } = useTranslation("clinics");
    return (
        <section className="">
            <div className="relative">
                <img src={GreenCar} className="w-full md:mt-16" alt="Image" />
                <img src={redLine} className="w-full  absolute top-[86%] left-0 -z-10" alt="Red Line" />
            </div>

            <div className='container mx-auto flex flex-wrap items-center justify-between md:my-[88px] mt-5'>
                <h1 className="text-[#1E1E1E] text-[32px] font-bold md:mb-16 mb-4">{t("title")}</h1>
                <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between w-full">
                    <div className="text-[#505050] text-base font-normal flex flex-col gap-2 lg:w-[719px]">
                        <p>{t('fPara')}</p>
                        <p>{t('sPara')}</p>
                        <p>{t('dPara')}</p>
                        <p>{t('thPara')}</p>
                        <p>{t('foPara')}</p>
                        <p>{t('fifPara')}</p>
                        <p>{t('sixPara')}</p>
                        <p>{t('sevPara')}</p>
                        <p>{t('eiPara')}</p>
                    </div>
                    <img src={clinic1} alt="Chairs" />
                </div>

                <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between w-full mt-16">
                    <img src={clinic2} className="" alt="Chairs" />
                    <div className="text-[#505050] text-base font-normal flex flex-col gap-2 lg:w-[719px]">
                        <p>{t('fPara')}</p>
                        <p>{t('sPara')}</p>
                        <p>{t('dPara')}</p>
                        <p>{t('thPara')}</p>
                        <p>{t('foPara')}</p>
                        <p>{t('fifPara')}</p>
                        <p>{t('sixPara')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content
