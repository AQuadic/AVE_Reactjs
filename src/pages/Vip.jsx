import VipHero from "@/components/Vip/VipHero.jsx";
import VipProducts from "@/components/Vip/VipProducts.jsx";
import VipBrief from "@/components/Vip/VipBrief.jsx";
import VipOpinions from "@/components/Vip/VipOpinions.jsx";

const Vip = () => {
  return (
    <div className="bg-[#121212] text-white">
      <VipHero />
      <VipProducts />
      <VipBrief />
      <VipOpinions />
    </div>
  );
};

export default Vip;
