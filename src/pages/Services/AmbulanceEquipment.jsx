import Header from '../../components/general/Header'
import header from '../../assets/images/header.webp'
import Contetnt from '../../components/Services/AmbulancEquipment/Contetnt'
import Slider from '../../components/general/Slider'
import Cards from '@/components/general/Cards'
import { useTranslation } from "react-i18next";

const AmbulanceEquipment = () => {
    const { t } = useTranslation("ambequipment");
    return (
        <div>
            <Header
                title={t('headTitle')}
                description={t('paraTitle')}
                imageUrl={header}
                button={t('buttonText')}
            />
            <Contetnt />
            <Slider />
            <Cards />
        </div>
    )
}

export default AmbulanceEquipment
