import Header from '../components/general/Header'
import Faqs from "../components/FAQs/Faqs"
import header from '../assets/images/header.webp'

const FAQs = () => {
    return (
        <div>
            <Header
                title="العربية لمعدات المركبات (AVE)"
                description="العربية لمعدات المركبات (AVE) هي إحدى الشركات الرائدة في مجال معدات السيارات. متخصصون في توريد سيارات الرعاية الصحية (سيارات الإسعاف ،العناية المركزة)"
                imageUrl={header}
            />
            <Faqs />
        </div>
    )
}

export default FAQs
