import { useTranslation } from 'react-i18next';
import product from '../../assets/images/home/product.png'

const Products = () => {
    const { t } = useTranslation("home");
    const products = Array(6).fill()
    return (
        <section className="container m:mt-20 mt-10">
            <div className='flex items-center gap-4'>
                <div className="w-2 md:h-[46px] h-7 bg-[#D82022] rounded-sm"></div>
                <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">
                    {t('products')}
                </h1>
            </div>
            <div className="mt-14">
                <div className="flex flex-wrap gap-4">
                    {products.map((_, index) => (
                        <div
                            key={index}
                            className="group md:w-[389px] w-[163px] md:h-[503px] h-[210px] bg-[#EFEFEF] hover:bg-[#D82022] rounded-3xl md:pt-4 pt-2 md:px-4 px-2"
                        >
                            <div className="md:w-[357px] w-[147px] md:h-[344px] h-[124px] rounded-[8px] bg-[#FFFFFF] mx-auto flex items-center justify-center">
                                <img
                                    src={product}
                                    className="w-[140px] h-[116px] md:w-[357px] md:h-[328px]"
                                    alt="Product"
                                />
                            </div>
                            <p className="text-[#1E1E1E] md:text-2xl text-sm mt-4 flex items-center justify-center">
                                {t("cardTitle")}
                            </p>
                            <button className="group-hover:bg-[#1E1E1E] md:w-[357px] w-[147px] md:h-14 h-8 bg-[#D82022] rounded-[8px] text-[#FAFAFA] md:text-2xl md:mt-[31px] mt-1">
                                {t("buttonTitle")}
                            </button>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products
