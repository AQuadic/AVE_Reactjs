import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/general/Layout";
import HomePage from "./pages/HomePage";
import WhoWeAre from "./pages/Who we are/WhoWeAre";
import ContactUs from "./pages/Contact Us/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/whoWeAre" element={<WhoWeAre />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
