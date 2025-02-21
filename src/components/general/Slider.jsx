import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
// import sliderImage1 from '../../../assets/images/sliderImage1.webp'
import sliderImage2 from '../../assets/images/sliderImage2.webp'
import sliderImage3 from '../../assets/images/sliderImage3.webp'
import sliderImage4 from '../../assets/images/sliderImage4.webp'
import cart from '../../assets/images/cart.svg'

const sliderImages = [
    { image: sliderImage2, title: 'سرنجة هوائية' },
    { image: sliderImage2, title: 'جبيرة هوائية' },
    { image: sliderImage3, title: 'شنطة اسعاف استانلس ' },
    { image: sliderImage4, title: 'شنطة اسعاف استانلس ' },
    { image: sliderImage4, title: 'شنطة اسعاف استانلس ' },
    { image: sliderImage4, title: 'شنطة اسعاف استانلس ' },
];
const Slider = () => {
    return (
        <section className='container mx-auto flex flex-wrap items-center justify-between md:my-[88px] my-5'>
            <div className='px-3 lg:px-0'>
                <div className='flex items-center gap-4'>
                    <div className='w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold md:text-[40px] text-base text-[#1E1E1E]"> منتجات <span className="text-[#B1060D]">ذات صلة </span></h1>
                </div>
                <Carousel className="w-full mt-10">
                    <CarouselContent className="-ml-1 xl:w-[1200px] lg:w-[900px] md:w-[700px] w-[300px]">
                        {sliderImages.map((item, index) => (
                            <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <div className="p-1 ">
                                    <Card>
                                        <CardContent className="flex flex-col p-0 m-0">
                                            <img src={item.image} alt={`Slide ${index + 1}`} className="w-full h-auto mb-4 rounded-lg" />
                                            <h3 className="text-lg font-bold px-2 py-2">{item.title}</h3>
                                            <div className="flex items-center justify-between">
                                                <button type="button" className="w-12 h-12 bg-[#D82022] rounded-tl-[4px] rounded-br-[4px] flex items-center justify-center">
                                                    <img src={cart} alt="Cart" />
                                                </button>
                                                <div className="px-2">
                                                    <p className="text-[#1E1E1E] font-bold">226 <span className="font-normal"> ج.م</span></p>
                                                    <p className="text-[#D82022]">10% <span className="line-through text-[#505050]">241</span></p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
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

export default Slider
