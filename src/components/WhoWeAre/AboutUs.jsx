// import aboutusAm from '../../assets/images/aboutUsAmb.webp'
import { useTranslation } from "react-i18next";
import logo from '../../assets/images/home/ambLogo.png'

const AboutUs = () => {
    const { t } = useTranslation("whoWeAre");
    return (
        <section className='md:container mx-auto flex xl:flex-row flex-col items-center justify-between lg:mt-[120px] mt-5'>
            <div className='px-3 md:px-0'>
                <div className='flex items-center gap-4'>
                    <div className='w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">{t('info')} <span className="text-[#B1060D]">{t('aboutUs')}</span></h1>
                </div>
                <h3 className="md:mt-6 mt-4 md:font-bold font-normal md:text-lg text-sm text-[#505050]">{t('whoWeAre')}</h3>
                <p className="md:w-[683px] text-[#505050] md:text-base text-sm">{t('fPara')}</p>
                <p className="md:w-[683px] text-[#505050] md:text-base text-sm mt-8">{t('sPara')}</p>
            </div>
            <img className='lg:w-[563px] lg:h-[449px] w-[228.6px] h-[182px]' src={logo} alt="Ambulance" />
        </section>
    )
}

export default AboutUs
