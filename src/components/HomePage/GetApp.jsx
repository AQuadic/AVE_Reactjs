import { Link } from "react-router"
import appstore from '../../assets/images/appStore.svg'
import googlePlay from '../../assets/images/googlePlay.svg'
import getApp from '../../assets/images/getApp.png'
const GetApp = () => {
    return (
        <section className='container mx-auto flex flex-wrap items-center justify-between md:my-[120px] mt-5'>
            <div className="flex flex-col md:items-start items-center">
                <h2 className="text-[#1E1E1E] font-bold md:text-[40px] text-xl">احصل على التطبيق</h2>
                <p className="md:w-[620px] text-[#505050] md:text-base text-sm md:mt-6 mt-2">احصل على تجربة فريدة مع تطبيق العربية ave لتجهيز السيارات. قم بتتبع طلبك بكل سهولة واستمتع بخدماتنا المميزة. قم بتنزيل التطبيق الآن واستمتع بتجربة رائعة</p>
                <div className="flex gap-6 md:mt-6 mt-4">
                    <Link to=''><img src={appstore} alt="App Store" /></Link>
                    <Link to=''><img src={googlePlay} alt="App Store" /></Link>
                </div>
            </div>
            <img src={getApp} className="md:mt-0 mt-8" alt="Mobile" />
        </section>
    )
}

export default GetApp
