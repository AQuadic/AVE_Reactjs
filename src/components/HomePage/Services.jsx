import service from '@/assets/images/home/service.png'
import Replace from '../icons/home/Replace'
import Maintenance from '../icons/home/Maintenance'
import ReplacaeMob from '../icons/home/ReplacaeMob'
import MaintenanceMob from '../icons/home/MaintenanceMob'
const Services = () => {
    return (
        <section className="container md:my-20 my-10">
            <div className='flex items-center gap-4'>
                <div className="w-2 md:h-[46px] h-7 bg-[#D82022] rounded-sm"></div>
                <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">
                    الخدمات
                </h1>
            </div>
            <div className="mt-14 flex gap-6">
                <div className="lg:w-[588px] w-[163px] lg:h-[584px] h-[198px] border border-[#CBCBCB] rounded-3xl flex flex-col items-center pt-4">
                    <img src={service} className='lg:w-[556px] lg:h-[350px] w-[147px] h-[124px]' alt="Service" />
                    <div className='lg:flex hidden lg:w-[100px] lg:h-[100px] w-10 h-10 bg-[#FFFFFF] rounded-full mt-[-10%] items-center justify-center'>
                        <Replace />
                    </div>
                    <div className='lg:hidden flex lg:w-[100px] lg:h-[100px] w-10 h-10 bg-[#FFFFFF] rounded-full mt-[-10%] items-center justify-center'>
                        <ReplacaeMob />
                    </div>
                    <h1 className='text-[#1E1E1E] font-bold lg:text-[40px] text-sm lg:mt-8'>إستبدل السياراه</h1>
                </div>

                <div className="lg:w-[588px] w-[163px] lg:h-[584px] h-[198px] border border-[#CBCBCB] rounded-3xl flex flex-col items-center pt-4">
                    <img src={service} className='lg:w-[556px] lg:h-[350px] w-[147px] h-[124px]' alt="Service" />
                    <div className='lg:flex hidden lg:w-[100px] lg:h-[100px] w-10 h-10 bg-[#FFFFFF] rounded-full mt-[-10%]  items-center justify-center'>
                        <Maintenance />
                    </div>
                    <div className='lg:hidden flex lg:w-[100px] lg:h-[100px] w-10 h-10 bg-[#FFFFFF] rounded-full mt-[-10%]  items-center justify-center'>
                        <MaintenanceMob />
                    </div>
                    <h1 className='text-[#1E1E1E] font-bold lg:text-[40px] text-sm lg:mt-8'>صيانه السيارات</h1>
                </div>
            </div>
        </section>
    )
}

export default Services
