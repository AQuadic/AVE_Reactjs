// import Header from '../components/general/Header'
import Faqs from "../components/FAQs/Faqs"
import heroImage from "../assets/images/home/heroImage.png";
import MainImage from "@/components/general/MainImage";
// import header from '../assets/images/header.webp'
// import { useTranslation } from "react-i18next";
const FAQs = () => {
    // const { t } = useTranslation("faq");
    return (
        <div>
            {/* <Header
                title={t('headTitle')}
                description={t('paraTitle')}
                imageUrl={header}
            /> */}
            <MainImage />
            <Faqs />
        </div>
    )
}

export default FAQs
