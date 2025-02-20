import Header from "@/components/general/Header"
import vip from '../../assets/images/vip.webp'
import Content from "@/components/Services/VIP/Content"
import Slider from "@/components/general/Slider"
const VIP = () => {
    return (
        <div>
            <Header
                title="تجهيز سيارة كبار الشخصيات"
                description="نحن نقدم أرقى سيارات VIP لتلبية وتلبية جميع أذواق واحتياجات شركات السياحة وسيارات رجال الأعمال ومركبات الاجتماعات المتنقلة."
                imageUrl={vip}
                button="طلب عرض سعر Vip"
            />
            <Content />
            <Slider />
        </div>
    )
}

export default VIP
