import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import ambCard from '../../assets/images/home/ambCard.png'
import iccreamCard from '../../assets/images/home/iceCreamCard.png'
import cafeCard from '../../assets/images/home/cafeCard.png'
import labCard from '../../assets/images/home/labCard.png'
import officeCard from '../../assets/images/home/officeCard.png'
import GreenCar from '../../assets/images/Clinics/Car.png'
import Disabilities from '../../assets/images/HealthCare/disabilities.png'


const Products = () => {
  const { t } = useTranslation("home");

  const productsData = [
    { title: t("vip"), path: "/vip", image: ambCard },
    { title: t("ambEquip"), path: "/ambEquipmenet", image: ambCard },
    { title: t("lab"), path: "/lab", image: labCard },
    { title: t("clinicsHome"), path: "/clinics", image: GreenCar },
    { title: t("disabilities"), path: "/disabilities", image: Disabilities },
    { title: t("workshop"), path: "/workshop", image: ambCard },
    { title: t("office"), path: "/office", image: officeCard },
    { title: t("cafe"), path: "/coffee", image: cafeCard },
    { title: t("icecream"), path: "/icecream", image: iccreamCard },
  ];



  return (
    <section className="container md:mt-20 mt-10">
      <div className="flex items-center gap-4">
        <div className="w-2 md:h-[46px] h-7 bg-[#D82022] rounded-sm"></div>
        <h1 className="font-bold md:text-[40px] text-xl text-[#1E1E1E]">
          {t("products")}
        </h1>
      </div>
      <div className="mt-14">
        <div className="flex flex-wrap gap-4 justify-center">
          {productsData.map((product, index) => (
            <Link key={index} to={product.path}>
              <div
                key={index}
                className="group md:w-[389px] w-[163px] md:h-[503px] h-[210px] bg-[#EFEFEF] hover:bg-[#D82022] rounded-3xl md:pt-4 pt-2 md:px-4 px-2"
              >
                <div className="md:w-[357px] w-[147px] md:h-[344px] h-[124px] rounded-[8px] bg-[#FFFFFF] mx-auto flex items-center justify-center">
                  <img
                    src={product.image}
                    className="w-[140px] h-[116px] md:w-[357px] md:h-[328px] object-contain"
                    alt={product.title}
                  />
                </div>
                <p className="text-[#1E1E1E] md:text-2xl text-sm mt-4 flex items-center justify-center">
                  {product.title}
                </p>
                <button className="group-hover:bg-[#1E1E1E] md:w-[357px] w-[147px] md:h-14 h-8 bg-[#D82022] rounded-[8px] text-[#FAFAFA] md:text-2xl md:mt-[31px] mt-1">
                  {t("buttonTitle")}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
