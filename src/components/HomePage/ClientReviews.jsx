import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import clientImg from '@/assets/images/clientImg.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientReviews = () => {
    const { t } = useTranslation("home");

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

    const settings = {
        centerMode: true,
        centerPadding: "20px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 4000,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: "40px",
                },
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1.8,
                    centerMode: true,
                    centerPadding: "70px",
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "30px",
                },
            },
        ],
    };

    const Card = ({ title, review, author, rating }) => (
        <div className="xl:w-[592px] lg:w-[480px] sm:h-[256px] px-4 py-6 my-8 shadow-lg rounded-[30px] bg-[#FFFFFF] flex flex-col justify-between mx-2">
            <h2 className="text-[#1D431E] font-bold text-lg mb-4">{title}</h2>
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <img src={clientImg} className="w-20 h-20" alt="Client" />
                    <div>
                        <h2 className="text-[#121212] text-base font-bold">{author}</h2>
                        <p className="text-[#5D5D5D] text-xs">ضابط حربي</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className="text-[#121212] font-bold ms-2">({rating})</p>
                    {[...Array(rating)].map((_, i) => (
                        <svg
                            key={i}
                            className="w-4 h-4 text-yellow-300 ms-1"
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

    return (
        <section className='container mx-auto md:flex hidden flex-col  md:my-[88px] my-10 px-3 lg:px-0'>
            <div className='flex items-center justify-center md:justify-start gap-4 mb-10'>
                <div className='w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm'></div>
                <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">
                    {t('reviews')} <span>{t('client')}</span>
                </h1>
            </div>
            <div className="w-full px-4 md:px-0">
                <Slider {...settings} className="red-dots">
                    {reviews.map((item, index) => (
                        <div key={index}>
                            <Card {...item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default ClientReviews
