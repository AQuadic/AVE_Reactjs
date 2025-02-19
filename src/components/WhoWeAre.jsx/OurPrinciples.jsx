import vision from '../../assets/images/Vision.svg'
import msg from '../../assets/images/msg.svg'
import principles from '../../assets/images/principles.svg'

const OurPrinciples = () => {
    const data = [
        {
            img: vision,
            title: "الرؤية",
            description:
                "رؤية متطورة لسيارات المتخصصة المصممة على متن الحافلة الصغيرة، والتي تتميز بمرونة التعديل والاستغلال الأمثل للمساحات بأعلى معايير الجودة وأفضل الأسعار.",
        },
        {
            img: msg,
            title: "الرسالة",
            description:
                "الاستفادة من قدراتنا الإنتاجية والخدمية الهائلة لتقديم حلول فريدة ومتكاملة وعالية الكفاءة. أن نصبح أفضل مورد للمنتجات والخدمات عالية الجودة.",
        },
        {
            img: principles,
            title: "القيم",
            description:
                "العمل الجماعي من خلال الثقة والاحترام والالتزام بحماس العملاء المسائلة على جميع المستويات.",
        },
    ];

    return (
        <section className='container mx-auto flex flex-wrap items-center justify-between md:mt-[120px] mt-5'>
            <div className='px-3 md:px-0'>
                <div className='flex items-center gap-4'>
                    <div className='w-2 h-[46px] bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold text-[40px] text-[#1E1E1E]">مبادئنا</h1>
                </div>
                <div className="mt-10 flex flex-wrap gap-6">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="sm:w-[384px] h-[384px] bg-white rounded-3xl flex flex-col items-center justify-center gap-5"
                        >
                            <img src={item.img} alt="Icon" />
                            <h2 className="text-[#000A0F] font-bold text-[32px] mt-6">{item.title}</h2>
                            <p className="text-center text-[#505050] text-base leading-6 px-2">
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
