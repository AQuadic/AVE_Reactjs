import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/general/Layout";
import HomePage from "./pages/HomePage";
import WhoWeAre from "./pages/WhoWeAre";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import Privacy from "./pages/Privacy";
import TermsAndConditions from "./pages/TermsAndConditions";
import AmbulanceEquipment from "./pages/Services/AmbulanceEquipment";
import VIP from "./pages/Services/VIP";

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
          <Route path="/vip" element={<VIP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
