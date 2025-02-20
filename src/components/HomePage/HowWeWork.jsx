import busNeeds from '../../assets/images/businessNeeds.svg'
import line from '../../assets/images/Line.svg'
import ProcessStep from './ProcessStep'
const HowWeWork = () => {
    return (
        <section className='container mx-auto flex flex-wrap items-center justify-between md:my-[120px] mt-5'>
            <div className='px-3 md:px-0'>
                <div className='flex items-center gap-4'>
                    <div className='w-2 h-[46px] bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold text-[40px] text-[#1E1E1E]">كيف <span className="text-[#B1060D]">نعمل</span></h1>
                </div>
                <div className="xl:w-[1540px] w-full h-full bg-white mt-10 py-11 md:px-20">
                    <section className='flex flex-wrap items-center gap-14'>
                        <ProcessStep iconSrc={busNeeds} number="01" title="دراسة احتياج العميل" />
                        <img src={line} alt="Line" />
                        <ProcessStep iconSrc={busNeeds} number="02" title="التصميم والتخطيط" />
                        <img src={line} alt="Line" />
                        <ProcessStep iconSrc={busNeeds} number="03" title="التجهيز والتعديلات الفنية" />
                    </section>
                    <section className='flex flex-wrap items-center gap-14 mt-14'>
                        <ProcessStep iconSrc={busNeeds} number="01" title="تركيب الاجهزة الطبية" />
                        <img src={line} alt="Line" />
                        <ProcessStep iconSrc={busNeeds} number="02" title="فحص وضمان الجودة" />
                        <img src={line} alt="Line" />
                        <ProcessStep iconSrc={busNeeds} number="03" title="التسليم والتدريب" />
                    </section>
                </div>
            </div>
        </section>
    )
}

export default HowWeWork
