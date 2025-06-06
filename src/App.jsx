import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/general/Layout";
import HomePage from "./pages/HomePage";
import WhoWeAre from "./pages/WhoWeAre";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import Privacy from "./pages/Privacy";
import TermsAndConditions from "./pages/TermsAndConditions";
import AmbulanceEquipment from "./pages/Services/AmbulanceEquipment";
import Office from "./pages/Services/Office";
import Clinics from "./pages/Services/Clinics";
import Coffee from "./pages/Services/Coffee";
import Lab from "./pages/Services/Lab";
import IceCream from "./pages/Services/IceCream";
import Vip from "@/pages/Vip.jsx";
import HealthCare from "./pages/HealthCare";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/whoWeAre" element={<WhoWeAre />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/ambEquipmenet" element={<AmbulanceEquipment />} />
          <Route path="/vip" element={<Vip />} />
          <Route path="/office" element={<Office />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/icecream" element={<IceCream />} />
          <Route path="/healthCare" element={<HealthCare />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
