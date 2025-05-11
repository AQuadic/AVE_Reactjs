import Form from "../components/ContactUs/Form"
// import Header from "../components/general/Header"
// import header from '../assets/images/header.webp'
// import { useTranslation } from "react-i18next";
import MainImage from "@/components/general/MainImage";
const ContactUs = () => {
    // const { t } = useTranslation("contactUs");
    return (
        <div>
            {/* <Header
                title={t('headTitle')}
                description={t('paraTitle')}
                imageUrl={header}
            /> */}
            <MainImage />
            <Form />
        </div>
    )
}

export default ContactUs
