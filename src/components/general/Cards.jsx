import sliderImage1 from '../../assets/images/sliderImage1.webp'
import sliderImage2 from '../../assets/images/sliderImage2.webp'
import sliderImage3 from '../../assets/images/sliderImage3.webp'
import sliderImage4 from '../../assets/images/sliderImage4.webp'
import cart from '../../assets/images/cart.svg'
import { useTranslation } from "react-i18next";
const Cards = () => {
    const { t } = useTranslation("vip");
    const products = [
        {
            image: sliderImage4,
            title: "شنطة اسعاف استانلس",
            price: 226,
            discount: 10,
            originalPrice: 241,
        },
        {
            image: sliderImage3,
            title: "جبيرة هوائية",
            price: 350,
            discount: 15,
            originalPrice: 410,
        },
        {
            image: sliderImage2,
            title: "ماسك",
            price: 180,
            discount: 5,
            originalPrice: 190,
        },
        {
            image: sliderImage1,
            title: "سرنجة هوائية",
            price: 299,
            discount: 20,
            originalPrice: 374,
        },
    ];
    return (
        <section className="container mt-14 block md:hidden">
            <div className='px-3 lg:px-0'>
                <div className='flex items-center gap-4'>
                    <div className='w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold md:text-[40px] text-base text-[#1E1E1E]">{t('relatedProducts')}</h1>
                </div>
                <div className="my-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <div key={index} className="w-[164px] h-[237px] bg-[#FAFAFA] rounded-sm">
                                <img src={product.image} className="w-[163px] h-[149px]" alt="Product" />
                                <p className="text-[#1E1E1E] text-sm mt-2 px-2">{product.title}</p>
                                <div className="flex items-center justify-between mt-3">
                                    <button
                                        type="button"
                                        className="w-12 h-12 bg-[#D82022] rounded-tl-[4px] rounded-br-[4px] flex items-center justify-center"
                                    >
                                        <img src={cart} alt="Cart" />
                                    </button>
                                    <div className="px-2">
                                        <p className="text-[#1E1E1E] font-bold">
                                            {product.price} <span className="font-normal"> ج.م</span>
                                        </p>
                                        <p className="text-[#D82022]">
                                            {product.discount}% <span className="line-through text-[#505050]">{product.originalPrice}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards
