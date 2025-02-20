const ClientReviews = () => {
    const reviews = [
        {
            title: "المختبر المتنقل",
            review: "شركة راقية ومحترمة وانصح بالتعامل معها",
            author: "احمد امين",
            rating: 5,
        },
        {
            title: "المختبر المتنقل",
            review: "شركة راقية ومحترمة وانصح بالتعامل معها",
            author: "احمد امين",
            rating: 5,
        },
        {
            title: "المختبر المتنقل",
            review: "شركة راقية ومحترمة وانصح بالتعامل معها",
            author: "احمد امين",
            rating: 5,
        }
    ];
    const Card = ({ title, review, author, rating }) => {
        return (
            <div className="sm:w-[390px] w-full sm:h-[142px] px-4 py-6 shadow-md">
                <div className="flex items-center justify-between">
                    <h2 className="text-[#1D431E] font-bold text-lg">{title}</h2>
                    <div className="flex items-center">
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
                <p className="text-[#505050] font-normal text-base mt-4">{review}</p>
                <p className="text-[#1E1E1E] text-xs mt-4">{author}</p>
            </div>
        );
    };
    return (
        <section className='container mx-auto flex flex-wrap items-center justify-between md:my-[88px] my-10'>
            <div className='px-3 lg:px-0'>
                <div className='flex items-center justify-center md:justify-start gap-4'>
                    <div className='w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">اراء <span className="text-[#B1060D]">العملاء</span></h1>
                </div>
                <div className="mt-10">
                    <div className="flex flex-wrap gap-6">
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
