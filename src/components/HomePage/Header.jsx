import bg from '../../assets/images/redCarpet.webp'
import car from '../../assets/images/headerCar.webp'
const Header = () => {
    return (
        <header className="container mx-auto">
            <div className='px-3 md:px-0 md:my-20 flex flex-wrap justify-between'>
                <section className='animate__animated animate__bounceInRight'>
                    <h1 className="font-bold text-[40px] text-[#1E1E1E]">العربيه <span className="text-[#B1060D]"> لمعدات </span>المركبات</h1>
                    <p className="md:w-[590px] text-[#505050] text-2xl mt-6">متخصصون في توريد سيارات الرعاية الصحية, كما نقوم بتوريد المعامل المتنقل لتقديم أفضل الخدمات للعملاء.</p>
                    <div className="mt-8 flex gap-10">
                        <button type="button" className="w-[215px] h-14 bg-[#D82022] text-white font-bold text-lg rounded-sm">تجهيز عربية</button>
                        <button type="button" className="w-[215px] h-14 border border-[#D82022] text-[#D82022] font-bold text-lg rounded-sm">شراء عربية</button>
                    </div>
                </section>
                <section className=''>
                    <img src={bg} className='top-0 z-0 absolute left-8' alt="background" />
                    <img src={car} className='absolute z-10 left-16' alt="Car" />
                    <div className='w-24 h-24 bg-[#FFFFFF80] rounded-full absolute left-72 top-36 z-10 flex flex-col items-center justify-center gap-1 animate__animated animate__bounceInRight' style={{ backdropFilter: 'blur(12px)' }}>
                        <p className='text-[#D82022] font-bold text-2xl'>2238+</p>
                        <p className='text-[#1E1E1E] text-base'>مشاريع</p>
                    </div>
                    <div className='w-24 h-24 bg-[#FFFFFF80] rounded-full absolute left-60 top-[304px] z-10 flex flex-col items-center justify-center gap-1 animate__animated animate__bounceInRight' style={{ backdropFilter: 'blur(12px)' }}>
                        <p className='text-[#D82022] font-bold text-2xl'>6000+</p>
                        <p className='text-[#1E1E1E] text-base'>طلبات</p>
                    </div>
                    <div className='w-24 h-24 bg-[#FFFFFF80] rounded-full absolute left-16 top-56 z-10 flex flex-col items-center justify-center gap-1 animate__animated animate__bounceInRight' style={{ backdropFilter: 'blur(12px)' }}>
                        <p className='text-[#D82022] font-bold text-2xl'>50+</p>
                        <p className='text-[#1E1E1E] text-base'>خبرة</p>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header
