import Header from '../components/general/Header'
import Content from '../components/Privacy/Content'
import header from '../assets/images/header.webp'

const Privacy = () => {
    return (
        <dev>
            <Header
                title="العربية لمعدات المركبات (AVE)"
                description="العربية لمعدات المركبات (AVE) هي إحدى الشركات الرائدة في مجال معدات السيارات. متخصصون في توريد سيارات الرعاية الصحية (سيارات الإسعاف ،العناية المركزة)"
                imageUrl={header}
            />
            <Content />
        </dev>
    )
}

export default Privacy
