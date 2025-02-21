import bg from '../../assets/images/redCarpet.webp'
import car from '../../assets/images/headerCar.webp'
const Header = () => {
    return (
        <header className="container mx-auto h-80">
            <div className='px-3 md:px-0 flex lg:flex-row flex-col justify-between'>
                <section className='animate__animated animate__bounceInRight md:my-[23px]'>
                    <h1 className="font-normal text-[56px] text-[#1E1E1E]">العربيه <span className="text-[#B1060D]"> لمعدات </span>المركبات</h1>
                    <p className="md:w-[590px] text-[#505050] text-2xl mt-6">متخصصون في توريد سيارات الرعاية الصحية, كما نقوم بتوريد المعامل المتنقل لتقديم أفضل الخدمات للعملاء.</p>
                    <div className="mt-8 flex gap-10">
                        <button type="button" className="w-[215px] h-14 bg-[#D82022] text-white font-bold text-lg rounded-sm">تجهيز عربية</button>
                        <button type="button" className="w-[215px] h-14 border border-[#D82022] text-[#D82022] font-bold text-lg rounded-sm">شراء عربية</button>
                    </div>
                </section>
                <section className='relative top-[-100px] left-[-30px]'>
                    <img src={bg} className='top-0 left-44' alt="background" />
                    <img src={car} className='top-44 absolute' alt="Car" />
                    <div className=''>
                        <div className='w-24 h-24 bg-[#FFFFFF80] rounded-full absolute left-56 top-[138px] z-10 flex flex-col items-center justify-center gap-1 animate__animated animate__bounceInRight' style={{ backdropFilter: 'blur(12px)' }}>
                            <p className='text-[#D82022] font-bold text-2xl'>2238+</p>
                            <p className='text-[#1E1E1E] text-base'>مشاريع</p>
                        </div>
                        <div className='w-24 h-24 bg-[#FFFFFF80] rounded-full absolute left-[200px] top-[300px] z-10 flex flex-col items-center justify-center gap-1 animate__animated animate__bounceInRight' style={{ backdropFilter: 'blur(12px)' }}>
                            <p className='text-[#D82022] font-bold text-2xl'>6000+</p>
                            <p className='text-[#1E1E1E] text-base'>طلبات</p>
                        </div>
                        <div className='w-24 h-24 bg-[#FFFFFF80] rounded-full absolute left-4 top-56 z-10 flex flex-col items-center justify-center gap-1 animate__animated animate__bounceInRight' style={{ backdropFilter: 'blur(12px)' }}>
                            <p className='text-[#D82022] font-bold text-2xl'>50+</p>
                            <p className='text-[#1E1E1E] text-base'>خبرة</p>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header
