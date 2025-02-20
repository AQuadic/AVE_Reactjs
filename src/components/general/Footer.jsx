import Logo from '../../assets/images/navbarLogo.svg'
import LinkedIn from '../../assets/images/linkedin.svg'
import youtube from '../../assets/images/youtube.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
import x from '../../assets/images/x.svg'
import check from '../../assets/images/check.svg'
import { Link } from 'react-router'
const Footer = () => {
    return (
        <div className='relative z-20'>
            <footer className="bg-[#1E1E1E] lg:h-[372px]">
                <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
                    <div className="lg:flex xl:gap-32 lg:gap-20">
                        <div className="mb-6 md:mb-0">
                            <Link to='/' className="flex items-center justify-center md:justify-start">
                                <img src={Logo} alt="Logo" />
                            </Link>
                            <p className='md:w-[373px] text-base leading-6 text-white md:text-start text-center'>العربية لمعدات المركبات (AVE) هي إحدى الشركات الرائدة في مجال معدات السيارات. متخصصون في توريد سيارات الرعاية الصحية (سيارات الإسعاف ،العناية المركزة)</p>
                            <div className='flex items-center md:justify-start justify-center gap-3 mt-[18px]'>
                                <Link to=''><img src={LinkedIn} className='w-8 h-8' alt="LinkedIn" /></Link>
                                <Link to=''><img src={youtube} className='w-8 h-8' alt="youtube" /></Link>
                                <Link to=''><img src={instagram} className='w-8 h-8' alt="instagram" /></Link>
                                <Link to=''><img src={facebook} className='w-8 h-8' alt="facebook" /></Link>
                                <Link to=''><img src={whatsapp} className='w-8 h-8' alt="whatsapp" /></Link>
                                <Link to=''><img src={x} className='w-8 h-8' alt="x" /></Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:gap-10 xl:gap-24 sm:grid-cols-3 mt-5 lg:mt-0">
                            <div className='text-center'>
                                <h2 className="text-2xl font-semibold text-white">الخدمات</h2>
                                <div className='w-6 h-1 bg-[#ED1C24] rounded-sm mt-4 mb-2 mx-auto'></div>
                                <ul className="text-white font-normal text-base flex md:flex-row flex-col items-center justify-center">
                                    <div className='order-2 md:order-2 flex flex-col items-center md:items-start'>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/' >لذوي الهمم</Link>
                                        </li>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/' >عيادات متنقلة</Link>
                                        </li>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/' >ورش متنقلة</Link>
                                        </li>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/' >مقهى</Link>
                                        </li>
                                    </div>
                                    <div className='order-1 md:order-1 flex flex-col items-center md:items-start'>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/' >المختبر المتنقل</Link>
                                        </li>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/ambEquipmenet' >تجهيز  إسعاف</Link>
                                        </li>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/vip' >كبار الشخصيات</Link>
                                        </li>
                                        <li className="mb-4 flex items-center gap-[9px]">
                                            <img src={check} alt="Check" className='md:block hidden' />
                                            <Link to='/' >ورشة متنقلة</Link>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            <div className='flex flex-col items-center md:items-start'>
                                <h2 className="text-2xl font-semibold text-white">الشركة</h2>
                                <div className='w-6 h-1 bg-[#ED1C24] rounded-sm mt-4 mb-2'></div>
                                <ul className="text-white font-normal text-base flex flex-col md:items-start items-center">
                                    <li className="mb-4 flex items-center gap-[9px]">
                                        <img src={check} alt="Check" className='md:block hidden' />
                                        <Link to='/whoWeAre' >من نحن</Link>
                                    </li>
                                    <li className="mb-4 flex items-center gap-[9px]">
                                        <img src={check} alt="Check" className='md:block hidden' />
                                        <Link to='/' >تواصل معنا</Link>
                                    </li>
                                    <li className="mb-4 flex items-center gap-[9px]">
                                        <img src={check} alt="Check" className='md:block hidden' />
                                        <Link to='/faqs' >الاسئلة الشائعة</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col items-center md:items-start'>
                                <h2 className="text-2xl font-semibold text-white">قانونى</h2>
                                <div className='w-6 h-1 bg-[#ED1C24] rounded-sm mt-4 mb-2'></div>
                                <ul className="text-white font-normal text-base flex flex-col md:items-start items-center">
                                    <li className="mb-4 flex items-center gap-[9px]">
                                        <img src={check} alt="Check" className='md:block hidden' />
                                        <Link to='/terms' >الشروط والاحكام</Link>
                                    </li>
                                    <li className="mb-4 flex items-center gap-[9px]">
                                        <img src={check} alt="Check" className='md:block hidden' />
                                        <Link to='/privacy' >سياسة الخصوصية</Link>
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
