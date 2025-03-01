import bg from '../../assets/images/redCarpet.webp'
import mobBG from '../../assets/images/mobBG.webp'
import car from '../../assets/images/headerCar.webp'
import { useTranslation } from "react-i18next";
const Header = () => {
    const { t } = useTranslation("home");
    return (
        <header className="container md:h-80">
            <div className='flex md:flex-row flex-col justify-between'>
                <section className='animate__animated animate__bounceInRight md:my-[23px] md:order-1 order-2 mt-56 mb-12 md:mb-0 md:mt-14 text-center md:text-start'>
                    <h1 className="md:font-normal font-bold lg:text-[56px] text-xl text-[#1E1E1E] lg:leading-[56px]">{t('arabic')} <span className="text-[#B1060D]"> {t('Vehicle')} </span>{t('Equipment')}</h1>
                    <p className="lg:w-[590px] w-[330px] text-[#505050] lg:text-2xl text-sm md:font-normal font-bold md:mt-6 mt-2 lg:!leading-[40px]">{t('headTitle')}</p>
                    <div className="md:mt-8 mt-6 flex md:gap-10 gap-6">
                        <button type="button" className="lg:w-[215px] w-[160px] md:h-14 h-12 bg-[#D82022] text-white font-bold text-lg rounded-sm">{t('prepareCar')}</button>
                        <button type="button" className="lg:w-[215px] w-[160px] md:h-14 h-12 border border-[#D82022] text-[#D82022] font-bold text-lg rounded-sm">{t('buyCar')}</button>
                    </div>
                </section>
                <section className='relative top-[-100px] md:left-[-30px] ltr:left-[-16px] md:order-2 order-1'>
                    <img src={bg} className='md:flex hidden top-0 left-44' alt="background" />
                    <img src={mobBG} className='absolute md:hidden flex top-11 left-[58px]' alt="background" />
                    <img src={car} className='top-44 md:left-0 left-[120px] absolute md:w-[371px] md:h-[232px] w-[134.3px] h-[84px]' alt="Car" />
                    <div className=''>
                        <div className='md:w-24 md:h-24 w-16 h-16 bg-[#FFFFFF80] rounded-full absolute left-[200px] md:top-[138px] top-[141px] flex flex-col items-center justify-center gap-1 animate__animated animate__bounceInRight' style={{ backdropFilter: 'blur(12px)' }}>
                            <p className='text-[#D82022] font-bold md:text-2xl text-base'>2238+</p>
                            <p className='text-[#1E1E1E] md:text-base text-xs'>{t('projects')}</p>
                        </div>
                        <div className='md:w-24 md:h-24 w-16 h-16 bg-[#FFFFFF80] rounded-full absolute md:left-[200px] left-[140px] md:top-[300px] top-[220px] flex flex-col items-center justify-center gap-1 animate__animated animate__bounceInRight' style={{ backdropFilter: 'blur(12px)' }}>
                            <p className='text-[#D82022] font-bold md:text-2xl text-base'>6000+</p>
                            <p className='text-[#1E1E1E] md:text-base text-xs'>{t('orders')}</p>
                        </div>
                        <div className='md:w-24 md:h-24 w-16 h-16 bg-[#FFFFFF80] rounded-full absolute md:left-4 md:top-56 top-36 left-20 flex flex-col items-center justify-center gap-1 animate__animated animate__bounceInRight' style={{ backdropFilter: 'blur(12px)' }}>
                            <p className='text-[#D82022] font-bold md:text-2xl text-base'>50+</p>
                            <p className='text-[#1E1E1E] md:text-base text-xs'>{t('experience')}</p>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header
