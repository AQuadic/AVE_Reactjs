import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import logo1 from '@/assets/images/home/logo1.png';
import logo2 from '@/assets/images/home/logo2.png';
import logo3 from '@/assets/images/home/logo3.png';
import logo4 from '@/assets/images/home/logo4.png';
import logo5 from '@/assets/images/home/logo5.png';
import logo6 from '@/assets/images/home/logo6.png';
import logo7 from '@/assets/images/home/logo7.png';
import logo8 from '@/assets/images/home/logo8.png';

const Clients = () => {
    const { t } = useTranslation("home");

    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

    return (
        <section className='container mx-auto flex flex-wrap items-center justify-between md:my-[88px] my-5'>
            <div className=''>
                <div className='flex items-center md:justify-start gap-4'>
                    <div className='w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">{t('ourClients')}</h1>
                </div>
                <section className="container mt-8" dir="ltr">
                    <Marquee
                        className="marquee-shadow py-6 md:px-3 rounded-[20px]"
                        autoFill={true}
                    >
                        {logos.map((logo, index) => (
                            <img key={index} src={logo} className="md:w-[112px] w-[74px] md:h-[112px] h-[74px] rounded-full" alt={`Logo ${index}`} />
                        ))}
                    </Marquee>
                </section>
            </div>
        </section>
    )
}

export default Clients;
