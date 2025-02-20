import Header from '../components/general/Header'
import AboutUs from '../components/WhoWeAre/AboutUs'
import OurPrinciples from '../components/WhoWeAre/OurPrinciples'
import OurCertificates from '../components/WhoWeAre/OurCertificates'
import header from '../assets/images/header.webp'

const WhoWeAre = () => {
    return (
        <div>
            <Header
                title="العربية لمعدات المركبات (AVE)"
                description="العربية لمعدات المركبات (AVE) هي إحدى الشركات الرائدة في مجال معدات السيارات. متخصصون في توريد سيارات الرعاية الصحية (سيارات الإسعاف ،العناية المركزة)"
                imageUrl={header}
            />
            <AboutUs />
            <OurPrinciples />
            <OurCertificates />
        </div>
    )
}

export default WhoWeAre
