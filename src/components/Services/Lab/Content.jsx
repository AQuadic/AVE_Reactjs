// import check from '../../../assets/images/red_check.svg'
import { useTranslation } from "react-i18next";
import lab from '@/assets/images/Lab/Lab.png'
import lab1 from '@/assets/images/Lab/lab1.png'
import lab2 from '@/assets/images/Lab/lab2.png'
import lab3 from '@/assets/images/Lab/lab3.png'
const Content = () => {
    const { t } = useTranslation("lab");
    return (
        <section>
            <img src={lab} className='w-full md:mt-24' alt="Image" />
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
                    <img src={lab1} alt="Lab" />
                </div>

                <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between w-full mt-16">
                    <img src={lab2} alt="Lab" />
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

                <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between w-full mt-16">
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
                    <img src={lab3} alt="Lab" />
                </div>

            </div>
        </section>
    )
}

export default Content
