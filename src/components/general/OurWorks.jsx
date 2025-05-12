import { useState } from "react";
import { useTranslation } from "react-i18next";
import AboutUsImg from '@/assets/images/home/aboutUsimg.png'
import profile from '@/assets/images/home/picture.png'
const OurWorks = () => {
    const { t } = useTranslation("home");
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <section className='container'>
            <div className='flex items-center gap-4'>
                <div className="w-2 md:h-[46px] h-7 bg-[#D82022] rounded-sm"></div>
                <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">
                    {t('ourWork')}
                </h1>
            </div>

            <div className="flex xl:flex-row flex-col items-center justify-between md:my-20">
                <img className='lg:w-[563px] lg:h-[449px] w-[228.6px] h-[182px]' src={AboutUsImg} alt="Image" />
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center xl:gap-6 gap-10 md:my-4 my-8">
                <div className="w-full h-full border border-[#CBCBCB] rounded-2xl hover:bg-[#EFEFEF] relative flex flex-col items-center justify-center">
                    <img src={profile} className="w-[92px] h-[92px] rounded-full absolute top-[-25%]" alt="Profile" />
                    <p className="text-[#1E1E1E] text-2xl font-bold mt-20">{t('ourWorksTitle')}</p>
                </div>


                <div className="w-full h-full border border-[#CBCBCB] rounded-2xl hover:bg-[#EFEFEF] relative flex flex-col items-center justify-center">
                    <img src={profile} className="w-[92px] h-[92px] rounded-full absolute top-[-25%]" alt="Profile" />
                    <p className="text-[#1E1E1E] text-2xl font-bold mt-20">{t('ourWorksTitle')}</p>
                </div>

                <div className="w-full h-full border border-[#CBCBCB] rounded-2xl hover:bg-[#EFEFEF] relative flex flex-col items-center justify-center">
                    <img src={profile} className="w-[92px] h-[92px] rounded-full absolute top-[-25%]" alt="Profile" />
                    <p className="text-[#1E1E1E] text-2xl font-bold mt-20">{t('ourWorksTitle')}</p>
                </div>

                <div className="w-full h-full border border-[#CBCBCB] rounded-2xl hover:bg-[#EFEFEF] relative flex flex-col items-center justify-center">
                    <img src={profile} className="w-[92px] h-[92px] rounded-full absolute top-[-25%]" alt="Profile" />
                    <p className="text-[#1E1E1E] text-2xl font-bold mt-20">{t('ourWorksTitle')}</p>
                </div>
            </div>
        </section>
    )
}

export default OurWorks
