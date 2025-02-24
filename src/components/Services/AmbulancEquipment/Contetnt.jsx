import check from '../../../assets/images/red_check.svg'
import { useTranslation } from "react-i18next";
const Contetnt = () => {
    const { t } = useTranslation("ambequipment");
    return (
        <section className='container mx-auto flex flex-wrap items-center justify-between md:my-[88px] mt-5'>
            <div className='px-3 md:px-0'>
                <div className='flex items-center gap-4'>
                    <div className='w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">{t('carPrep')} <span className="text-[#B1060D]">{t('vip')} </span>{t('cars')}</h1>
                </div>
                <h3 className="md:mt-6 mt-4 font-normal md:text-xl text-base text-[#1E1E1E] leading-8">بدأنا في تجهيز سيارات الإسعاف لتطوير المجال وتجهيز أنواع مختلفة من سيارات الإسعاف لتصبح حجر الزاوية لكل من يأتي من بعدنا، وتشمل هذه الأنواع من سيارات الإسعاف:</h3>
                <ul className='text-base font-normal text-[#505050]'>
                    <li className='flex items-center gap-2 md:mt-7 mt-2'>
                        <img src={check} alt="Check" />
                        <p>تجهيز سيارة إسعاف معيارية</p>
                    </li>
                    <li className='flex items-center gap-2 md:mt-7 mt-2'>
                        <img src={check} alt="Check" />
                        <p>تجهيز مركبات التبرع بالدم</p>
                    </li>
                    <li className='flex items-center gap-2 md:mt-7 mt-2'>
                        <img src={check} alt="Check" />
                        <p>تجهيز سيارات العيادات المتنقلة</p>
                    </li>
                    <li className='flex items-center gap-2 md:mt-7 mt-2'>
                        <img src={check} alt="Check" />
                        <p>تجهيز سيارات الإسعاف المتطورة</p>
                    </li>
                    <li className='flex items-center gap-2 md:mt-7 mt-2'>
                        <img src={check} alt="Check" />
                        <p>تجهيز سيارات الإسعاف للعناية المركزة (ICU)</p>
                    </li>
                </ul>
                <div className='text-base font-normal text-[#505050] mt-6'>
                    <h4>تجهيز سيارات الإسعاف بأعلى المعايير</h4>
                    <p>في العربية، نحن في طليعة تجهيز سيارات الإسعاف وفقًا للمبادئ التوجيهية التي وضعتها الكلية الأمريكية للجراحين (ACS)، والكلية الأمريكية لأطباء الطوارئ (ACEP)، والرابطة الوطنية لأطباء EMS (NAEMSP). إن التزامنا بالتميز يضمن أن سيارات الإسعاف لدينا مجهزة لتقديم رعاية استثنائية في مختلف السيناريوهات الطبية.</p>
                    <h4>معدات الإسعاف القياسية</h4>
                    <p>تم تجهيز سيارة الإسعاف القياسية لدينا بأساسيات دعم الحياة الأساسية (BLS)، من خلال :</p>
                    <ul className='list-disc px-6'>
                        <li>معدات التهوية ومجرى الهواء تشمل أسطوانات الأكسجين، وأنابيب التهوية، وحقيبة أمبو، ومنظار الحنجرة، والأنابيب الحنجرية، ومقياس التأكسج النبضي، والبخاخات.</li>
                        <li>تشتمل أجهزة التثبيت على دعامات الأصابع، وأقواس عنق الرحم، ونقالات العمود الفقري، ونقالات الكرسي، وجبائر الكسور.</li>
                        <li>تشتمل معدات المراقبة وإزالة الرجفان على مزيل رجفان خارجي آلي.</li>
                        <li>تشمل الضمادات صفائح الحروق المعقمة، والضمادات المثلثة، والضمادات المختلفة، ولفائف الشاش، والضمادات الإطباقية.</li>
                        <li>أجهزة اتصال للتواصل السلس بين طاقم الطوارئ الطبي والمرسلين والتحكم الطبي</li>
                        <li>تشمل أساسيات مكافحة العدوى حماية العين، وحماية الوجه، والقفازات (المعقمة وغير المعقمة)، والمآزر أو العباءات، وأغطية الأحذية، ومطهر الأيدي بدون ماء، والمحلول المطهر، وحاويات الأدوات الحادة</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contetnt
