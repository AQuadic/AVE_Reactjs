import aboutusAm from '../../assets/images/aboutUsAmb.webp'
const AboutUs = () => {
    return (
        <section className='container mx-auto flex flex-wrap items-center justify-between md:mt-[120px] mt-5'>
            <div className='px-3 md:px-0'>
                <div className='flex items-center gap-4'>
                    <div className='w-2 h-[46px] bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold text-[40px] text-[#1E1E1E]">معلومات <span className="text-[#B1060D]">عنا</span></h1>
                </div>
                <h3 className="mt-6 font-bold text-lg text-[#505050]">من نحن وماذا نفعل؟</h3>
                <p className="md:w-[683px] text-[#505050] text-base">العربية لمعدات المركبات (AVE) هي إحدى الشركات الرائدة في مجال معدات السيارات. متخصصون في توريد سيارات الرعاية الصحية (سيارات الإسعاف المتطورة، سيارات الإسعاف، سيارات العناية المركزة، العيادات المتنقلة وعمليات نقل الدم). كما نقوم بتوريد المعامل المتنقلة (محطات المياه والغاز) وتم تجهيز الشركة بالورش المتنقلة وخدمات توجيه الطائرات لتقديم أفضل الخدمات للعملاء.</p>
                <p className="md:w-[683px] text-[#505050] text-base mt-8">تعتبر الشركة العربية لمعدات السيارات (AVE) من الشركات الرائدة في مجال تصنيع سيارات الإسعاف بمختلف أنواعها وهي الشركة الأولى في هذا المجال. وقد اتخذت AVE هذا المكانة المرموقة من خلال التزامها بإيجاد حلول متكاملة لتلبية كافة متطلبات العملاء وضمان التحسين المستمر. مما يجعلها الرائدة في مجال تصنيع السيارات المتخصصة ليس فقط في مصر ولكن أيضًا في الشرق الأوسط وأفريقيا.</p>
            </div>
            <img src={aboutusAm} alt="Ambulance" />
        </section>
    )
}

export default AboutUs
