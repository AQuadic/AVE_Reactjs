import service1 from '../../assets/images/HealthCare/ambulanceServices.png'
import service2 from '../../assets/images/HealthCare/ClinicServices.png'
import MaintenanceMob from '../icons/home/MaintenanceMob'
import { useTranslation } from "react-i18next";
import Ambulance from '../icons/HealthCare/Ambulance';
import Clinics from '../icons/HealthCare/Clinics';
const Services = () => {
    const { t } = useTranslation("home");
    return (
        <section className="container my-8">
            <div className='flex gap-6'>
                <div className="lg:w-[588px] w-[163px] lg:h-[584px] h-[198px] border border-[#CBCBCB] rounded-3xl flex flex-col items-center pt-4 hover:bg-[#F1F1F1]">
                    <img src={service1} className='lg:w-[556px] lg:h-[350px] w-[147px] h-[124px]' alt="Service" />
                    <div className='lg:flex hidden lg:w-[100px] lg:h-[100px] w-10 h-10 bg-[#FFFFFF] rounded-full mt-[-10%]  items-center justify-center'>
                        <Ambulance />
                    </div>
                    <div className='lg:hidden flex lg:w-[100px] lg:h-[100px] w-10 h-10 bg-[#FFFFFF] rounded-full mt-[-10%]  items-center justify-center'>
                        <MaintenanceMob />
                    </div>
                    <h1 className='text-[#1E1E1E] font-bold lg:text-[40px] text-sm lg:mt-10 mt-1'>{t('ambulance')}</h1>
                </div>

                <div className="lg:w-[588px] w-[163px] lg:h-[584px] h-[198px] border border-[#CBCBCB] rounded-3xl flex flex-col items-center pt-4 hover:bg-[#F1F1F1]">
                    <img src={service2} className='lg:w-[556px] lg:h-[350px] w-[147px] h-[124px]' alt="Service" />
                    <div className='lg:flex hidden lg:w-[100px] lg:h-[100px] w-10 h-10 bg-[#FFFFFF] rounded-full mt-[-10%]  items-center justify-center'>
                        <Clinics />
                    </div>
                    <div className='lg:hidden flex lg:w-[100px] lg:h-[100px] w-10 h-10 bg-[#FFFFFF] rounded-full mt-[-10%]  items-center justify-center'>
                        <MaintenanceMob />
                    </div>
                    <h1 className='text-[#1E1E1E] font-bold lg:text-[40px] text-sm lg:mt-10 mt-1'>{t('clinics')}</h1>
                </div>
            </div>
        </section>
    )
}

export default Services
