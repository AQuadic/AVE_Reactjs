import vipUmage from '@/assets/images/vipPage/vipAboutus.png'
import { useState } from 'react';
import { useTranslation } from "react-i18next";
const VipBrief = () => {
  const { t } = useTranslation("home");
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="container flex xl:flex-row flex-col items-center justify-between md:mt-20">
      <img className='' src={vipUmage} alt="Image" />
      <div>
        <div className='flex items-center gap-4'>
          <div className="w-2 md:h-[46px] h-7 bg-[#DDB611] rounded-sm"></div>
          <h1 className="font-bold md:text-[40px] text-xl text-[#FAFAFA]">
            {t('aboutus')}
          </h1>
        </div>
        <p className='text-[#FAFAFA] lg:text-[32px] text-xl font-bold mt-4'><span className='text-[#DDB611]'>&quot;</span> {t('aboutTitle')}
          ( <span className='text-[#DDB611]'>AVE</span>)<span className='text-[#DDB611]'>&quot;</span>
        </p>
        <p className='text-[#FAFAFA] lg:text-2xl text-base lg:font-bold font-normal md:w-[570px] my-4'>
          {t('aboutDescription')}
          {showMore && (
            <span> {t('aboutDescription')}</span>
          )}
          <span
            className='text-[#DDB611] cursor-pointer'
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


export default VipBrief
