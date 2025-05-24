import { useState } from "react";
import minus from '../../assets/images/minus.svg'
import plus from '../../assets/images/plus.svg'
import { useTranslation } from "react-i18next";
const Faqs = () => {
    const { t } = useTranslation("faq");
    const [openAccordion, setOpenAccordion] = useState(null);
    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section className="container mx-auto lg:my-[120px] my-6 px-3 lg:px-0 ">
              <div className='flex items-center gap-4'>
                <div className='w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm'></div>
                <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">{t('questions')}</h1>
            </div>
            <div id="accordion-color" className="w-full lg:mt-10 mt-4">

                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                    <h2 id="accordion-color-heading-1">
                        <button type="button" className={`flex items-center justify-between w-full p-5 font-normal text-xl text-[#1E1E1E] focus:ring-0 gap-3  ${openAccordion === 1 ? "bg-[#0000000D] " : ""}`} onClick={() => toggleAccordion(1)}>
                            <span>ماهو اضطراب التوحد؟</span>
                            <img src={openAccordion === 1 ? minus : plus} alt={openAccordion === 1 ? "Collapse" : "Expand"} />
                        </button>
                    </h2>
                    {openAccordion === 1 && (
                        <div className="p-5 border-t border-gray-200">
                            <p className="mb-2 text-[#505050] text-base">هو اضطراب نمائي تشمل أعراضه الأساسية على صعوبات في التواصل والتفاعل الاجتماعي وأنماط تكرارية و محدودة من السلوكيات.</p>
                        </div>
                    )}
                </div>

                <div className="border border-gray-200 rounded-2xl overflow-hidden mt-6">
                    <h2 id="accordion-color-heading-2">
                        <button type="button" className={`flex items-center justify-between w-full p-5 font-normal text-xl text-[#1E1E1E] focus:ring-0 gap-3  ${openAccordion === 2 ? "bg-[#0000000D] " : ""}`} onClick={() => toggleAccordion(2)}>
                            <span>ماهو اسباب التوحد؟</span>
                            <img src={openAccordion === 2 ? minus : plus} alt={openAccordion === 2 ? "Collapse" : "Expand"} />
                        </button>
                    </h2>
                    {openAccordion === 2 && (
                        <div className="p-5 border-t border-gray-200">
                            <p className="mb-2 text-[#505050] text-base"> هو اضطراب نمائي تشمل أعراضه الأساسية على صعوبات في التواصل والتفاعل الاجتماعي وأنماط تكرارية و محدودة من السلوكيات.</p>
                        </div>
                    )}
                </div>

                <div className="border border-gray-200 rounded-2xl overflow-hidden mt-6">
                    <h2 id="accordion-color-heading-3">
                        <button type="button" className={`flex items-center justify-between w-full p-5 font-normal text-xl text-[#1E1E1E] focus:ring-0 gap-3  ${openAccordion === 3 ? "bg-[#0000000D] " : ""}`} onClick={() => toggleAccordion(3)}>
                            <span>ماهو اسباب التوحد؟</span>
                            <img src={openAccordion === 3 ? minus : plus} alt={openAccordion === 3 ? "Collapse" : "Expand"} />
                        </button>
                    </h2>
                    {openAccordion === 3 && (
                        <div className="p-5 border-t border-gray-200">
                            <p className="mb-2 text-[#505050] text-base">هو اضطراب نمائي تشمل أعراضه الأساسية على صعوبات في التواصل والتفاعل الاجتماعي وأنماط تكرارية و محدودة من السلوكيات.</p>
                        </div>
                    )}
                </div>

                <div className="border border-gray-200 rounded-2xl overflow-hidden mt-6">
                    <h2 id="accordion-color-heading-3">
                        <button type="button" className={`flex items-center justify-between w-full p-5 font-normal text-xl text-[#1E1E1E] focus:ring-0 gap-3  ${openAccordion === 4 ? "bg-[#0000000D] " : ""}`} onClick={() => toggleAccordion(4)}>
                            <span>ماهو اسباب التوحد؟</span>
                            <img src={openAccordion === 4 ? minus : plus} alt={openAccordion === 4 ? "Collapse" : "Expand"} />
                        </button>
                    </h2>
                    {openAccordion === 4 && (
                        <div className="p-5 border-t border-gray-200">
                            <p className="mb-2 text-[#505050] text-base">هو اضطراب نمائي تشمل أعراضه الأساسية على صعوبات في التواصل والتفاعل الاجتماعي وأنماط تكرارية و محدودة من السلوكيات.</p>

                        </div>
                    )}
                </div>

            </div>

        </section>
    )
}

export default Faqs
