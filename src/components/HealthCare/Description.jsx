
import Standard1 from '../../assets/images/HealthCare/Standard1.jpg'
// import Standard1 from '../../assets/images/HealthCare/Standard1.png'
import ICU from '../../assets/images/HealthCare/ICU.png'
import { useTranslation } from "react-i18next";
const Description = () => {
    const { t } = useTranslation("home");
    return (
        <section className="container">
            <div className=" w-full h-auto border border-[#CBCBCB] rounded-3xl mb-8 pb-8">
                <h2 className='text-[#D82022] md:text-5xl text-2xl font-bold text-center pt-10'>Ambulance</h2>
                <div className='flex items-center justify-around mt-16'>
                    <div className='flex flex-col items-center'>
                        <img src={ICU} className='md:w-[200px] w-[120px] md:h-[200px] h-[120px] rounded-full' alt="Image" />
                        <p className='text-[#1E1E1E] md:text-[40px] text-lg font-bold leading-[40px] md:mt-9 mt-2'>{t('icu')}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={Standard1} className='md:w-[200px] w-[120px] md:h-[200px] h-[120px] rounded-full' alt="Image" />
                        <p className='text-[#1E1E1E] md:text-[40px] text-lg font-bold leading-[40px] md:mt-9 mt-2'>{t('standard')}</p>
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
