import Form from "../components/ContactUs/Form"
import Header from "../components/general/Header"
import header from '../assets/images/header.webp'
const ContactUs = () => {
    return (
        <div>
            <Header
                title="العربية لمعدات المركبات (AVE)"
                description="العربية لمعدات المركبات (AVE) هي إحدى الشركات الرائدة في مجال معدات السيارات. متخصصون في توريد سيارات الرعاية الصحية (سيارات الإسعاف ،العناية المركزة)"
                imageUrl={header}
            />
            <Form />
        </div>
    )
}

export default ContactUs
