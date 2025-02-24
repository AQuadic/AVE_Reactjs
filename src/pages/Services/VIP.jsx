import Header from "@/components/general/Header"
import vip from '../../assets/images/vip.webp'
import Content from "@/components/Services/VIP/Content"
import Slider from "@/components/general/Slider"
import Cards from "@/components/general/Cards"
import { useTranslation } from "react-i18next";
const VIP = () => {
    const { t } = useTranslation("vip");
    return (
        <div>
            <Header
                title={t('headTitle')}
                description={t('paraTitle')}
                imageUrl={vip}
                button={t('buttonText')}
            />
            <Content />
            <Slider />
            <Cards />
        </div>
    )
}

export default VIP
