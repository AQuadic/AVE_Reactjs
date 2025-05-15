import OurCertificates from "@/components/general/OurCertificates";
import ClientReviews from "@/components/HomePage/ClientReviews";
import Clients from "@/components/HomePage/Clients";
import Header from "@/components/HomePage/Header";
import HowWeWork from "@/components/HomePage/HowWeWork";
import GetApp from "@/components/HomePage/GetApp";
import AboutUs from "@/components/HomePage/AboutUs";
import Products from "@/components/HomePage/Products";
import Services from "@/components/HomePage/Services";

const HomePage = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Products />
      <Services />
      <Clients />
      <ClientReviews />
      <OurCertificates />
      {/* <HowWeWork  />
      <GetApp /> */}
    </div>
  );
};

export default HomePage;
