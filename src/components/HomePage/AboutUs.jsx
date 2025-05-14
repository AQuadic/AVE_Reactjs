// import AboutUsImg from '@/assets/images/home/aboutUsimg.png'
import { useState } from 'react';
import { useTranslation } from "react-i18next";

import logo from '../../assets/images/home/ambLogo.png'

const AboutUs = () => {
    const { t } = useTranslation("home");
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    return (
        <section className="container flex xl:flex-row flex-col items-center justify-between md:mt-20">
            <img className='lg:w-[563px] lg:h-[449px] w-[228.6px] h-[182px]' src={logo} alt="Image" />
            <div>
                <div className='flex items-center gap-4'>
                    <div className="w-2 md:h-[46px] h-7 bg-[#D82022] rounded-sm"></div>
                    <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">
                        {t('aboutus')}
                    </h1>
                </div>
                <p className='text-[#1E1E1E] lg:text-[32px] text-xl font-bold mt-4'>&quot; {t('aboutTitle')}
                    ( <span className='text-[#D82022]'>AVE</span>)&quot;
                </p>
                <p className='text-[#505050] lg:text-2xl text-base lg:font-bold font-normal md:w-[570px] mt-4'>
                    {t('aboutDescription')}
                    {showMore && (
                        <span> {t('aboutDescription')}</span>
                    )}
                    <span
                        className='text-[#D82022] cursor-pointer'
                        onClick={toggleShowMore}
                    >
                        {' '}
                        {showMore ? t('readLess') : t('readMore')}
                    </span>
                </p>
            </div>
        </section>
    )
}

export default AboutUs
