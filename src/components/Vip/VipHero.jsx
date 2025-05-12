import heroImage from "../../assets/images/vipPage/vipHero.png";
import heroGradient from "../../assets/images/vipPage/heroGradient.png";
import vipCar from "../../assets/images/vipPage/vipCar.png";
import { Link } from "react-router";
import { useState } from "react";

const VipHero = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const images = [vipCar, vipCar, vipCar];
  return (
    <section className="bg-[#121212] text-white relative z-10">
      <div className="flex gap-5  w-full container justify-end">
        {images.map((image, idx) => (
          <div
            onClick={() => setSelectedIdx(idx)}
            key={idx}
            className={`cursor-pointer p-2 ${idx === selectedIdx ? "yellow-gradient" : " grey-gradient"}  w-[133px] h-[70px] my-8 sm:my-[56px] relative rounded-lg`}
          >
            <img src={image} className="w-[160px] absolute -right-4" />
          </div>
        ))}
      </div>
      <div>
        <img
          src={heroGradient}
          className="absolute -top-64 left-0 -z-20"
          alt=""
        />
        <div className="container flex justify-between ">
          <div className="flex flex-col gap-4  ">
            <p className="text-[32px]">تجهيز سيارة</p>
            <h1 className="font-bold text-[56px] text-vipColor">
              {" "}
              كبار الشخصيات
            </h1>
            <p className="max-w-[450px] text-2xl leading-10 ">
              نحن نقدم أرقى سيارات VIP لتلبية وتلبية جميع أذواق واحتياجات شركات
              السياحة وسيارات رجال الأعمال ومركبات الاجتماعات المتنقلة.
            </p>
            <Link
              className="hover:text-black hover:bg-white mt-4 text-lg font-bold px-7 py-3 border self-start rounded-md border-vipColor"
              to="/contactUs"
            >
              طلب عرض سعر Vip
            </Link>
          </div>
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-[777px] h-full   "
          />
        </div>
      </div>
    </section>
  );
};

export default VipHero;
