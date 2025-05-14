import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import vipCar from "../../assets/images/vipPage/vipCar.png";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Stagger each child animation by 0.3s
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const VipProducts = () => {
  const { t } = useTranslation("home");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const imagesThumbnails = [vipCar, vipCar, vipCar];

  return (
    <section className="container" ref={ref}>
      <h2 className="flex items-center gap-2">
        <div className="h-10 w-1 bg-vipColor"></div>
        <span className="text-2xl sm:text-[40px]">{t('models')}</span>
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {imagesThumbnails.map((image, idx) => (
          <motion.div
            key={idx}
            className="grey-gradient rounded-lg border border-vipColor"
            variants={itemVariants}
          >
            <img
              src={image}
              alt="Image"
              className="relative left-5 -bottom-8"
            />
            <p className="text-vipColor text-lg sm:text-2xl bg-black text-center pt-12 pb-16 rounded-b-lg">
              {t('carModel')}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default VipProducts;
