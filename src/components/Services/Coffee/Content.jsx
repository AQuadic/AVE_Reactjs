import { useTranslation } from "react-i18next";
import coffee from '@/assets/images/Coffee/coffee.png'
import coffee1 from '@/assets/images/Coffee/coffee1.png'
import coffee2 from '@/assets/images/Coffee/coffee2.png'
import coffe3 from '@/assets/images/Coffee/coffe3.png'

const Content = () => {
    const { t } = useTranslation("coffee");
    return (
        <section>
            <img src={coffee} className='w-full md:mt-24' alt="Image" />
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
                    <img src={coffee1} alt="Coffee" />
                </div>

                <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between w-full mt-16">
                    <img src={coffee2} className="" alt="Coffee" />
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
                    <img src={coffe3} alt="Coffee" />
                </div>

            </div>
        </section>
    )
}

export default Content
