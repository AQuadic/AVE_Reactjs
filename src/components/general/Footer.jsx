import Logo from '../../assets/images/navbarLogo.svg'
import LinkedIn from '../../assets/images/linkedin.svg'
import youtube from '../../assets/images/youtube.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
import x from '../../assets/images/x.svg'
import check from '../../assets/images/check.svg'
import { Link } from 'react-router'
import { useTranslation } from "react-i18next";
const Footer = () => {
    const { t } = useTranslation("navbar");
    return (
        <div className='relative'>
            <footer className="bg-[#1E1E1E] xl:h-[372px]">
                <div className="container w-full max-w-screen-2xl p-4 py-6 lg:py-8">
                    <div className="xl:flex xl:gap-32 lg:gap-20">
                        <div className="mb-6 md:mb-0">
                            <Link to='/' className="flex items-center justify-center md:justify-start">
                                <img src={Logo} alt="Logo" />
                            </Link>
                            <p className='md:w-[373px] text-base leading-6 text-white md:text-start text-center'>{t('paragraph')}</p>
                            <div className='flex items-center md:justify-start justify-center gap-3 mt-[18px]'>
                                <Link to=''><img src={LinkedIn} className='w-8 h-8' alt="LinkedIn" /></Link>
                                <Link to=''><img src={youtube} className='w-8 h-8' alt="youtube" /></Link>
                                <Link to=''><img src={instagram} className='w-8 h-8' alt="instagram" /></Link>
                                <Link to=''><img src={facebook} className='w-8 h-8' alt="facebook" /></Link>
                                <Link to=''><img src={whatsapp} className='w-8 h-8' alt="whatsapp" /></Link>
                                <Link to=''><img src={x} className='w-8 h-8' alt="x" /></Link>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col lg:gap-20 md:gap-5 mt-5 xl:mt-0">
                            <div className='text-center'>
                                <h2 className="text-2xl font-semibold text-white">{t('services')}</h2>
                                <div className='w-6 h-1 bg-[#ED1C24] rounded-sm mt-4 mb-2 mx-auto'></div>
                                <ul className="text-white font-normal text-base flex md:flex-row flex-col items-center justify-center gap-3">
                                    <div className='order-2 md:order-2 flex flex-col items-center md:items-start'>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/' >{t('disabilities')}</Link>
                                        </li>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/' >{t('clinics')}</Link>
                                        </li>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/' >{t('workshop')}</Link>
                                        </li>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/' >{t('cafe')}</Link>
                                        </li>
                                    </div>
                                    <div className='order-1 md:order-1 flex flex-col items-center md:items-start'>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/' >{t('lab')}</Link>
                                        </li>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/ambEquipmenet' >{t('ambEquip')}</Link>
                                        </li>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/vip' >{t('vip')}</Link>
                                        </li>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/' >{t('workshop')}</Link>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h2 className="text-2xl font-semibold text-white">{t('company')}</h2>
                                <div className='w-6 h-1 bg-[#ED1C24] rounded-sm mt-4 mb-2'></div>
                                <ul className="text-white font-normal text-base flex flex-col  items-center">
                                    <li className="mb-4 flex items-center gap-[9px]">
                                        <Link to='/whoWeAre' >{t('whoWeAre')}</Link>
                                    </li>
                                    <li className="mb-4 flex items-center gap-[9px]">
                                        <Link to='/contactUs' >{t('contactUs')}</Link>
                                    </li>
                                    <li className="mb-4 flex items-center gap-[9px]">
                                        <Link to='/faqs' >{t('faq')}</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h2 className="text-2xl font-semibold text-white">{t('legal')}</h2>
                                <div className='w-6 h-1 bg-[#ED1C24] rounded-sm mt-4 mb-2'></div>
                                <ul className="text-white font-normal text-base flex flex-col items-center">
                                    <li className="mb-4 flex items-center gap-[9px]">
                                        <Link to='/terms' >{t('terms')}</Link>
                                    </li>
                                    <li className="mb-4 flex items-center gap-[9px]">
                                        <Link to='/privacy' >{t('privacy')}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
