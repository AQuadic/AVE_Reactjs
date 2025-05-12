import heroImage from "../../assets/images/vipPage/vipHero.png";
import heroGradient from "../../assets/images/vipPage/heroGradient.png";
import { Link } from "react-router";

const VipHero = () => {
  const images = [heroImage, heroImage, heroImage];
  return (
    <section className="bg-[#121212] text-white relative z-10">
      <img
        src={heroGradient}
        className="absolute -top-64 left-0 -z-20"
        alt=""
      />
      <div className="container flex justify-between items-center">
        <div className="flex flex-col gap-4 ">
          <p className="text-[32px]">تجهيز سيارة</p>
          <h1 className="font-bold text-[56px] text-vipColor">
            {" "}
            كبار الشخصيات
          </h1>
          <p className="max-w-[450px] text-2xl leading-10">
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
          className="w-full max-w-[777px] h-full"
        />
      </div>
    </section>
  );
};

export default VipHero;
