import mainImage from '@/assets/images/home/MainImage.png'
import redLine from '@/assets/images/home/redLine.png'
const MainImage = () => {
    return (
        <div className="relative z-0 mt-5">
            <img src={mainImage} className="lg:w-[928px] w-full lg:h-[560px] mx-auto" alt="Main Image" />
            <img src={redLine} className="w-full absolute bottom-[6%] left-0 -z-10" alt="Red Line" />
        </div>
    )
}

export default MainImage
