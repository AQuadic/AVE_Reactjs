import user from '../../assets/images/user.svg'
import phone from '../../assets/images/phone.svg'
import email from '../../assets/images/email.svg'
import { useTranslation } from "react-i18next";
const Form = () => {
    const { t } = useTranslation("contactUs");
    return (
        <section className='container mx-auto flex xl:flex-row flex-col items-center lg:justify-between justify-center lg:mt-[120px] my-5'>
            <div className='px-3 md:px-0'>
                <div className='flex items-center gap-4'>
                    <div className='w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">{t('contact')} <span className="text-[#B1060D]">{t('us')}</span></h1>
                </div>
                <div className="md:w-[580px] h-[716px] rounded-sm md:my-10 mt-4 md:px-6 py-5 shadow-all">
                    <div className="relative">
                        <label htmlFor="name" className="text-[#1E1E1E] text-base">{t('name')} <span className="text-[#D82022]">*</span></label>
                        <div className="flex items-center">
                            <img src={user} alt="Icon" className="absolute rtl:right-2 ltr:left-2 top-14" />
                            <input type="text" name="name" id="name" className="px-10 md:w-[532px] w-[333px] h-14 bg-[#0000000D] rounded-sm mt-4 p-5 focus:outline-0" placeholder={t('enterName')} />
                        </div>
                    </div>

                    <div className="relative mt-8">
                        <label htmlFor="name" className="text-[#1E1E1E] text-base">{t('mobileNumber')}</label>
                        <div className="flex items-center">
                            <img src={phone} alt="Icon" className="absolute rtl:right-2 ltr:left-2 top-14" />
                            <input type="text" name="name" id="name" className="px-10 md:w-[532px] w-[333px] h-14 bg-[#0000000D] rounded-sm mt-4 p-5 focus:outline-0" placeholder={t('enterMobile')} />
                        </div>
                    </div>

                    <div className="relative mt-8">
                        <label htmlFor="name" className="text-[#1E1E1E] text-base">{t('email')} <span className="text-[#D82022]">*</span></label>
                        <div className="flex items-center">
                            <img src={email} alt="Icon" className="absolute rtl:right-2 ltr:left-2 top-14" />
                            <input type="text" name="name" id="name" className="px-10 md:w-[532px] w-[333px] h-14 bg-[#0000000D] rounded-sm mt-4 p-5 focus:outline-0" placeholder={t('enterEmail')} />
                        </div>
                    </div>

                    <div className="relative mt-8">
                        <label htmlFor="name" className="text-[#1E1E1E] text-base">{t('msg')} <span className="text-[#D82022]">*</span></label>
                        <div className="flex items-center">
                            <img src={email} alt="Icon" className="absolute rtl:right-2 ltr:left-2 top-14" />
                            <textarea type="text" name="name" id="name" className="px-10 md:w-[532px] w-[333px] h-[148px] bg-[#0000000D] rounded-sm mt-3 p-5 focus:outline-0" placeholder={t('enterMsg')} />
                        </div>
                    </div>
                    <button className='md:w-[270px] w-full h-14 rounded-sm bg-[#D82022] text-white flex items-center justify-center mx-auto mt-10'>{t('send')}</button>
                </div>
            </div>
            <div className="google-map-code">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27663.865388467515!2d30.88893656523436!3d29.922386600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1747238723221!5m2!1sar!2seg"
                    width="596"
                    height="716"
                    style={{ border: 0, marginTop: '10px' }}
                    allowfullscreen=""
                    aria-hidden="false"
                    className="md:w-[596px] md:h-[716px] w-[343px] h-[580px]"
                />
            </div>

        </section>
    )
}

export default Form
