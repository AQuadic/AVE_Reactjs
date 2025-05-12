import { useTranslation } from "react-i18next";
import clientImg from '../../assets/images/clientImg.webp'

const ClientReviews = () => {
    const reviews = [
        {
            title: "لوريم إيبسوم هو ببساطة نص شكلي (بلا معنى) يُستخدم في صناعة الطباعة والتنضيد. وقد كان لوريم إيبسوم النص الشكلي القياسي لهذه الصناعة على الإطلاق... اقرأ المزيد",
            review: "شركة راقية ومحترمة وانصح بالتعامل معها",
            author: "احمد امين",
            rating: 5,
        },
        {
            title: "لوريم إيبسوم هو ببساطة نص شكلي (بلا معنى) يُستخدم في صناعة الطباعة والتنضيد. وقد كان لوريم إيبسوم النص الشكلي القياسي لهذه الصناعة على الإطلاق... اقرأ المزيد",
            review: "شركة راقية ومحترمة وانصح بالتعامل معها",
            author: "احمد امين",
            rating: 5,
        },
        {
            title: "لوريم إيبسوم هو ببساطة نص شكلي (بلا معنى) يُستخدم في صناعة الطباعة والتنضيد. وقد كان لوريم إيبسوم النص الشكلي القياسي لهذه الصناعة على الإطلاق... اقرأ المزيد",
            review: "شركة راقية ومحترمة وانصح بالتعامل معها",
            author: "احمد امين",
            rating: 5,
        }
    ];
    const Card = ({ title, review, author, rating }) => {
        return (
            <div className="md:w-[592px] w-full sm:h-[256px] px-4 py-6 shadow-lg rounded-[30px] bg-[#FFFFFF] flex flex-col justify-between">
                <h2 className="text-[#1D431E] font-bold text-lg">{title}</h2>
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <img src={clientImg} className="w-20 h-20" alt="Client Image" />
                        <div>
                            <h2 className="text-[#121212] text-base font-bold">{author}</h2>
                            <p className="text-[#5D5D5D] text-xs">ضابط حربي</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className="text-[#121212] font-bold">(6.5)</p>
                        {[...Array(rating)].map((_, i) => (
                            <svg
                                key={i}
                                className="w-4 h-4 text-yellow-300 ms-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        );
    };
    const { t } = useTranslation("home");

    return (
        <section className='container mx-auto flex flex-wrap items-center justify-between md:my-[88px] my-10'>
            <div className='px-3 lg:px-0'>
                <div className='flex items-center justify-center md:justify-start gap-4'>
                    <div className='w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]"> {t('reviews')} <span className="text-[#B1060D]">{t('client')}</span></h1>
                </div>
                <div className="mt-10">
                    <div className="flex flex-wrap justify-center gap-6">
                        {reviews.map((item, index) => (
                            <Card key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientReviews
