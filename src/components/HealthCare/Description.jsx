
import Standard from '../../assets/images/HealthCare/Standard.png'
import ICU from '../../assets/images/HealthCare/ICU.png'
import { useTranslation } from "react-i18next";
const Description = () => {
    const { t } = useTranslation("home");
    return (
        <section className="container">
            <div className="lg:w-[1200px] w-full h-auto border border-[#CBCBCB] rounded-3xl mb-8 pb-8">
                <div className='flex items-center justify-around mt-16'>
                    <div className='flex flex-col items-center'>
                        <img src={ICU} className='md:w-[200px] w-[120px] md:h-[200px] h-[120px] rounded-full' alt="Image" />
                        <p className='text-[#1E1E1E] md:text-[40px] text-3xl font-bold leading-[40px] mt-9'>ICU</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={Standard} className='md:w-[200px] w-[120px] md:h-[200px] h-[120px] rounded-full' alt="Image" />
                        <p className='text-[#1E1E1E] md:text-[40px] text-3xl font-bold leading-[40px] mt-9'>Standard</p>
                    </div>
                </div>
                <div className='text-[#505050] md:text-2xl text-base leading-[160%] md:px-10 px-4 mt-8'>
                    <p>{t('description1')}</p>
                    <p>{t('description1')}</p>
                </div>
            </div>
        </section>
    )
}

export default Description
