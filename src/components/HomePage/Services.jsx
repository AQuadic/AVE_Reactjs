// import service1 from '@/assets/images/home/service.png'
import service2 from '@/assets/images/home/service.png'
import Replace from '../icons/home/Replace'
import Maintenance from '../icons/home/Maintenance'
import ReplacaeMob from '../icons/home/ReplacaeMob'
import MaintenanceMob from '../icons/home/MaintenanceMob'

import serviceLab from '../../assets/images/home/serviceLab.jpeg'
import workshop from '../../assets/images/home/workshop.jpg'
import cafeCard from '../../assets/images/home/cafeCard.png'
import officeCard from '../../assets/images/home/officeCard.png'
import ambulanceService from '../../assets/images/home/ambulanceService.JPG'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
const Services = () => {
    const { t } = useTranslation("home");

    const services = [
        {
            id: 1,
            image: ambulanceService,
            title: t('care'),
            iconDesktop: <Replace />,
            iconMobile: <ReplacaeMob />,
        },
        {
            id: 2,
            image: serviceLab,
            title: t('mobileLaboratories'),
            iconDesktop: <Maintenance />,
            iconMobile: <MaintenanceMob />,
        },
        {
            id: 3,
            image: workshop,
            title: t('workshops'),
            iconDesktop: <Maintenance />,
            iconMobile: <MaintenanceMob />,
        },
        {
            id: 4,
            image: service2,
            title: t('vet'),
            iconDesktop: <Maintenance />,
            iconMobile: <MaintenanceMob />,
        },
        {
            id: 5,
            image: service2,
            title: t('rest'),
            iconDesktop: <Maintenance />,
            iconMobile: <MaintenanceMob />,
        },
        {
            id: 6,
            image: cafeCard,
            title: t('coffeShop'),
            iconDesktop: <Maintenance />,
            iconMobile: <MaintenanceMob />,
        },
        {
            id: 7,
            image: officeCard,
            title: t('officeCall'),
            iconDesktop: <Maintenance />,
            iconMobile: <MaintenanceMob />,
        },
        {
            id: 8,
            image: service2,
            title: t('police'),
            iconDesktop: <Maintenance />,
            iconMobile: <MaintenanceMob />,
        },
        {
            id: 9,
            image: service2,
            title: t('plans'),
            iconDesktop: <Maintenance />,
            iconMobile: <MaintenanceMob />,
        },
    ]

    return (
        <section className="container md:my-20 my-10">
            <div className='flex items-center gap-4'>
                <div className="w-2 md:h-[46px] h-7 bg-[#D82022] rounded-sm"></div>
                <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">
                    {t('services')}
                </h1>
            </div>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {services.map(({ id, image, title, iconDesktop, iconMobile }) => (
                    <Link to="contactUs" key={id}>
                        <div className="lg:w-[588px] w-[163px] lg:h-[584px] h-[198px] border border-[#CBCBCB] rounded-3xl flex flex-col items-center pt-4">
                            <img
                                src={image}
                                className="lg:w-[556px] lg:h-[350px] w-[147px] h-[124px]"
                                alt="Service"
                            />
                            <div className='lg:flex hidden lg:w-[100px] lg:h-[100px] w-10 h-10 bg-[#FFFFFF] rounded-full mt-[-10%] items-center justify-center'>
                                {iconDesktop}
                            </div>
                            <div className='lg:hidden flex lg:w-[100px] lg:h-[100px] w-10 h-10 bg-[#FFFFFF] rounded-full mt-[-10%] items-center justify-center'>
                                {iconMobile}
                            </div>
                            <h1 className="text-[#1E1E1E] font-bold lg:text-[40px] text-sm lg:mt-8 text-center md:leading-10">
                                {title}
                            </h1>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Services
