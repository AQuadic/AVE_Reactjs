import Header from '../components/general/Header'
import AboutUs from '../components/WhoWeAre/AboutUs'
import OurPrinciples from '../components/WhoWeAre/OurPrinciples'
import OurCertificates from '../components/general/OurCertificates'
import header from '../assets/images/header.webp'
import { useTranslation } from "react-i18next";

const WhoWeAre = () => {
    const { t } = useTranslation("whoWeAre");
    return (
        <div>
            <Header
                title={t('headTitle')}
                description={t('paraTitle')}
                imageUrl={header}
            />
            <AboutUs />
            <OurPrinciples />
            <OurCertificates />
        </div>
    )
}

export default WhoWeAre
