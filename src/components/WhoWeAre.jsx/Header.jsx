import header from '../../assets/images/header.webp'
const Header = () => {
    return (
        <div className="relative overflow-hidden">
            <img src={header} className="w-full h-44 md:h-full object-center object-cover" alt="Header Image" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#1E1E1E99]"></div>
            <div className="absolute md:top-1/2 top-10 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2">
                <h1 className="text-[#FAFAFA] md:text-[56px] text-center">العربية لمعدات المركبات (AVE)</h1>
                <p className="lg:w-[590px] text-[#FAFAFA] md:text-2xl text-sm font-normal text-center mx-auto md:mt-6">العربية لمعدات المركبات (AVE) هي إحدى الشركات الرائدة في مجال معدات السيارات. متخصصون في توريد سيارات الرعاية الصحية (سيارات الإسعاف ،العناية المركزة)</p>
            </div>
        </div>
    )
}

export default Header
