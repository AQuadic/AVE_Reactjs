import aboutusAm from '../../assets/images/aboutUsAmb.webp'
const AboutUs = () => {
    return (
        <section className='md:container mx-auto flex xl:flex-row flex-col items-center justify-between md:mt-[120px] mt-5'>
            <div className='px-3 md:px-0'>
                <div className='flex items-center gap-4'>
                    <div className='w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">معلومات <span className="text-[#B1060D]">عنا</span></h1>
                </div>
                <h3 className="md:mt-6 mt-4 md:font-bold font-normal md:text-lg text-sm text-[#505050]">من نحن وماذا نفعل؟</h3>
                <p className="md:w-[683px] text-[#505050] md:text-base text-sm">العربية لمعدات المركبات (AVE) هي إحدى الشركات الرائدة في مجال معدات السيارات. متخصصون في توريد سيارات الرعاية الصحية (سيارات الإسعاف المتطورة، سيارات الإسعاف، سيارات العناية المركزة، العيادات المتنقلة وعمليات نقل الدم). كما نقوم بتوريد المعامل المتنقلة (محطات المياه والغاز) وتم تجهيز الشركة بالورش المتنقلة وخدمات توجيه الطائرات لتقديم أفضل الخدمات للعملاء.</p>
                <p className="md:w-[683px] text-[#505050] md:text-base text-sm mt-8">تعتبر الشركة العربية لمعدات السيارات (AVE) من الشركات الرائدة في مجال تصنيع سيارات الإسعاف بمختلف أنواعها وهي الشركة الأولى في هذا المجال. وقد اتخذت AVE هذا المكانة المرموقة من خلال التزامها بإيجاد حلول متكاملة لتلبية كافة متطلبات العملاء وضمان التحسين المستمر. مما يجعلها الرائدة في مجال تصنيع السيارات المتخصصة ليس فقط في مصر ولكن أيضًا في الشرق الأوسط وأفريقيا.</p>
            </div>
            <img src={aboutusAm} alt="Ambulance" />
        </section>
    )
}

export default AboutUs
