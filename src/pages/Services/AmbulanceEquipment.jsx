import Header from '../../components/general/Header'
import header from '../../assets/images/header.webp'
import Contetnt from '../../components/Services/AmbulancEquipment/Contetnt'
import Slider from '../../components/general/Slider'
import Cards from '@/components/general/Cards'

const AmbulanceEquipment = () => {
    return (
        <div>
            <Header
                title="تجهيز سيارة اسعاف"
                description="متخصصون في توريد سيارات الرعاية الصحية, كما نقوم بتوريد المعامل المتنقل لتقديم أفضل الخدمات للعملاء."
                imageUrl={header}
                button="طلب عرض سعر"
            />
            <Contetnt />
            <Slider />
            <Cards />
        </div>
    )
}

export default AmbulanceEquipment
