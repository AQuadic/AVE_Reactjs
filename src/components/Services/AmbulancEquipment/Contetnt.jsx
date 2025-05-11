// import check from '../../../assets/images/red_check.svg'
import { useTranslation } from "react-i18next";
const Contetnt = () => {
    const { t } = useTranslation("vip");
    return (
        <section>
            <img src="../../../../dist/assets/Ambulance/ambulance.png" className='w-full md:mt-24' alt="Ambulance" />
            <div className='container mx-auto flex flex-wrap items-center justify-between md:my-[88px] mt-5'>
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
                    <img src="/dist/assets/Ambulance/ambulance1.png" alt="Ambulance" />
                </div>

                <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between w-full mt-16">
                    <img src="/dist/assets/Ambulance/ambulance2.png" alt="Ambulance" />
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
                    <img src="/dist/assets/Ambulance/ambulance3.png" alt="Ambulance" />
                </div>

            </div>
        </section>
    )
}

export default Contetnt
