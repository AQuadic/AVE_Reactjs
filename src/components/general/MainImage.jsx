import mainImage from '@/assets/images/home/MainImage.png'
import redLine from '@/assets/images/home/redLine.png'

const MainImage = () => {
    return (
        <div className="relative z-0 md:mt-44 mt-20 flex flex-col justify-center items-center">
            <h1 className='text-[#D82022] lg:text-[424px] md:text-[350px] text-[200px] font-extrabold absolute md:top-[15%] top-[12%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10'>AVE</h1>
            <img src={mainImage} className="lg:w-[928px] w-full lg:h-[406px] mx-auto" alt="Main Image" />
            <img src={redLine} className="w-full h-[97px] absolute bottom-[5%] left-0 -z-10" alt="Red Line" />
        </div>
    )
}

export default MainImage
