import OurCertificates from "@/components/general/OurCertificates";
import ClientReviews from "@/components/HomePage/ClientReviews";
import Clients from "@/components/HomePage/Clients";
import Header from "@/components/HomePage/Header";
import HowWeWork from "@/components/HomePage/HowWeWork";
import GetApp from "@/components/HomePage/GetApp";

const HomePage = () => {
  return (
    <div>
      <Header />
      <OurCertificates />
      <HowWeWork />
      <Clients />
      <ClientReviews />
      <GetApp />
    </div>
  )
};

export default HomePage;
