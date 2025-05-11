import { useTranslation } from "react-i18next";
const Content = () => {
    const { t } = useTranslation("icecream");
    return (
        <section>
            <img src="/dist/assets/Icecream/IceCream.png" className='w-full md:mt-24' alt="Image" />
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
                    <img src="/dist/assets/Icecream/icecream1.png" alt="Ice Cream" />
                </div>

                <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between w-full mt-16">
                    <img src="/dist/assets/Icecream/icecream2.png" className="" alt="Ice Cream" />
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
                    <img src="/dist/assets/Icecream/icecream3.png" alt="Ice Cream" />
                </div>

            </div>
        </section>
    )
}

export default Content
