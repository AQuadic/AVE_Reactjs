import AboutUsImg from '@/assets/images/home/aboutUsimg.png'
const AboutUs = () => {
    return (
        <section className="container flex xl:flex-row flex-col items-center justify-between md:mt-20">
            <img className='lg:w-[563px] lg:h-[449px] w-[228.6px] h-[182px]' src={AboutUsImg} alt="Image" />
            <div>
                <div className='flex items-center gap-4'>
                    <div className="w-2 md:h-[46px] h-7 bg-[#D82022] rounded-sm"></div>
                    <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">
                        نبذه عنا
                    </h1>
                </div>
                <p className='text-[#1E1E1E] lg:text-[32px] text-xl font-bold mt-4'>&quot;العربية لمعدات المركبات
                    ( <span className='text-[#D82022]'>AVE</span>)&quot;
                </p>
                <p className='text-[#505050] lg:text-2xl text-base lg:font-bold font-normal md:w-[570px] mt-4'>هي إحدى الشركات العربية الرائدة في مجال معدات السيارات. متخصصون في توريد سيارات الرعاية الصحية (سيارات الإسعاف ،العناية المركزة) ليس في مصر فقط. وكذلك في الشرق الأوسط في مجال دقيق وصعب. وعندما برعت الشركة علي مدار 15 عاماً في هذا المجال مع توفير أفضل انواع التكنولوجيا الحديثة في تجهيز السيارات... <span className='text-[#D82022]'>أقرا المذيد</span></p>
            </div>
        </section>
    )
}

export default AboutUs
