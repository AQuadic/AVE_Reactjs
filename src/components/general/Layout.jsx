import { useLocation, useOutlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const Layout = () => {
  const outlet = useOutlet();
  const location = useLocation();
  useEffect(() => {
    if (!location.pathname.includes("#")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="min-h-[80vh]"
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
