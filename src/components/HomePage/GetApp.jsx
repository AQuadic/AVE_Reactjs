import { Link } from "react-router"
import appstore from '../../assets/images/appStore.svg'
import googlePlay from '../../assets/images/googlePlay.svg'
import getApp from '../../assets/images/getApp.png'
import { useTranslation } from "react-i18next";

const GetApp = () => {
    const { t } = useTranslation("home");
    return (
        <section className='container mx-auto flex flex-wrap items-center justify-between md:my-[120px] mt-5'>
            <div className="flex flex-col md:items-start items-center">
                <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className='w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm'></div>
                    <h2 className="text-[#1E1E1E] font-bold md:text-[40px] text-xl">{t('getThe')}<span className="text-[#B1060D]"> {t('app')}</span></h2>

                </div>
                <p className="md:w-[620px] text-[#505050] md:text-base text-sm md:mt-6 mt-2">{t('getAppInfo')}</p>
                <div className="flex gap-6 md:mt-6 mt-4">
                    <Link to=''><img src={appstore} alt="App Store" /></Link>
                    <Link to=''><img src={googlePlay} alt="App Store" /></Link>
                </div>
            </div>
            <img src={getApp} className="md:mt-0 mt-8" alt="Mobile" />
        </section>
    )
}

export default GetApp
