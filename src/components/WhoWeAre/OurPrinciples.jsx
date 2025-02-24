import vision from '../../assets/images/Vision.svg'
import msg from '../../assets/images/msg.svg'
import principles from '../../assets/images/principles.svg'
import { useTranslation } from "react-i18next";
const OurPrinciples = () => {
    const { t } = useTranslation("whoWeAre");
    const data = [
        {
            img: vision,
            title: t('title1'),
            description: t('desc1')
        },
        {
            img: msg,
            title: t('title2'),
            description: t('desc2')
        },
        {
            img: principles,
            title: t('title3'),
            description: t('desc3')
        },
    ];

    return (
        <section className='container flex flex-wrap items-center justify-between lg:mt-[120px] mt-5'>
            <div className='px-3 md:px-0'>
                <div className='flex items-center gap-4'>
                    <div className='w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">{t('ourPrinciples')}</h1>
                </div>
                <div className="md:mt-10 mt-6 flex flex-wrap justify-center gap-6">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="sm:w-[384px] md:h-[384px] h-[220px] md:bg-white bg-[#FAFAFA] rounded-3xl flex flex-col items-center justify-center md:gap-5 gap-2"
                            style={{ boxShadow: '0px 0px 3px 0px #00000029' }}
                        >
                            <img src={item.img} className='w-16 h-16 md:w-32 md:h-32' alt="Icon" />
                            <h2 className="text-[#000A0F] font-bold md:text-[32px] text-xl md:mt-6">{item.title}</h2>
                            <p className="text-center text-[#505050] md:text-base text-sm md:leading-6 px-2">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurPrinciples
