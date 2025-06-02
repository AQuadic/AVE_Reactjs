import { useState } from "react";
import { useTranslation } from "react-i18next";
import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";

const Faqs = () => {
  const { t } = useTranslation("faq");
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="container mx-auto lg:my-[120px] my-6 px-3 lg:px-0">
      <div className="flex items-center gap-4">
        <div className="w-1 md:h-[46px] h-7 bg-[#D82022] rounded-sm"></div>
        <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">
          {t("questions")}
        </h1>
      </div>

      <div id="accordion-color" className="w-full mt-4 lg:mt-10">
        {/* FAQ Item 1 */}
        <div className="overflow-hidden border border-gray-200 rounded-2xl">
          <h2>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-normal text-xl text-[#1E1E1E] focus:ring-0 gap-3 ${
                openAccordion === 1 ? "bg-[#0000000D]" : ""
              }`}
              onClick={() => toggleAccordion(1)}
            >
              <span>ما هي أنواع المركبات التي توفرها AVE؟</span>
              <img
                src={openAccordion === 1 ? minus : plus}
                alt={openAccordion === 1 ? "Collapse" : "Expand"}
              />
            </button>
          </h2>
          {openAccordion === 1 && (
            <div className="p-5 border-t border-gray-200">
              <p className="mb-2 text-[#505050] text-base">
                نحن نوفر سيارات مجهزة بالكامل مثل سيارات الإسعاف، شاحنات القهوة،
                سيارات الآيس كريم، ومركبات خاصة حسب الطلب.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div className="mt-6 overflow-hidden border border-gray-200 rounded-2xl">
          <h2>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-normal text-xl text-[#1E1E1E] focus:ring-0 gap-3 ${
                openAccordion === 2 ? "bg-[#0000000D]" : ""
              }`}
              onClick={() => toggleAccordion(2)}
            >
              <span>هل تقدمون خدمة تخصيص المركبات حسب الطلب؟</span>
              <img
                src={openAccordion === 2 ? minus : plus}
                alt={openAccordion === 2 ? "Collapse" : "Expand"}
              />
            </button>
          </h2>
          {openAccordion === 2 && (
            <div className="p-5 border-t border-gray-200">
              <p className="mb-2 text-[#505050] text-base">
                نعم، نقوم بتصميم وتجهيز المركبات حسب احتياجات العميل، بما في ذلك
                التجهيزات الداخلية والخارجية.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 3 */}
        <div className="mt-6 overflow-hidden border border-gray-200 rounded-2xl">
          <h2>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-normal text-xl text-[#1E1E1E] focus:ring-0 gap-3 ${
                openAccordion === 3 ? "bg-[#0000000D]" : ""
              }`}
              onClick={() => toggleAccordion(3)}
            >
              <span>ما هي مدة تجهيز المركبة؟</span>
              <img
                src={openAccordion === 3 ? minus : plus}
                alt={openAccordion === 3 ? "Collapse" : "Expand"}
              />
            </button>
          </h2>
          {openAccordion === 3 && (
            <div className="p-5 border-t border-gray-200">
              <p className="mb-2 text-[#505050] text-base">
                تختلف المدة حسب نوع التجهيز والمركبة، لكنها عادة ما تتراوح بين 2
                إلى 6 أسابيع.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 4 */}
        <div className="mt-6 overflow-hidden border border-gray-200 rounded-2xl">
          <h2>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-normal text-xl text-[#1E1E1E] focus:ring-0 gap-3 ${
                openAccordion === 4 ? "bg-[#0000000D]" : ""
              }`}
              onClick={() => toggleAccordion(4)}
            >
              <span>هل توفرون صيانة للمركبات بعد التسليم؟</span>
              <img
                src={openAccordion === 4 ? minus : plus}
                alt={openAccordion === 4 ? "Collapse" : "Expand"}
              />
            </button>
          </h2>
          {openAccordion === 4 && (
            <div className="p-5 border-t border-gray-200">
              <p className="mb-2 text-[#505050] text-base">
                نعم، نقدم خدمات ما بعد البيع والدعم الفني والصيانة لجميع
                المركبات المجهزة لدينا.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
