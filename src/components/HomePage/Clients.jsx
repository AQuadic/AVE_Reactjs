import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import clientImg from '../../assets/images/clientImg.webp'
import { useTranslation } from "react-i18next";

const Clients = () => {
    const { t } = useTranslation("home");
    return (
        <section className='container mx-auto flex flex-wrap items-center justify-between md:my-[88px] my-5'>
            <div className='px-3 lg:px-0'>
                <div className='flex items-center md:justify-start gap-4'>
                    <div className='w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">{t('ourClients')}</h1>
                </div>
                <Carousel className="xl:w-[1200px] lg:w-[900px] md:w-[650px] w-[250px] mt-10 mx-10">
                    <CarouselContent className="-ml-1">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/1 lg:basis-1/8">
                                <div className="md:w-[120px] md:h-[120px] w-[73px] h-[73px]">
                                    <img src={clientImg} alt="Client Image" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}

export default Clients
