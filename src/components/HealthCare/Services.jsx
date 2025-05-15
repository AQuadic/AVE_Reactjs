import service1 from "../../assets/images/HealthCare/ambulanceServices.png";
import service2 from "../../assets/images/HealthCare/ClinicServices.png";
import service3 from "../../assets/images/HealthCare/disabilities.png";
import service4 from "../../assets/images/HealthCare/lab.png";
import { useTranslation } from "react-i18next";
import Ambulance from "../icons/HealthCare/Ambulance";
import Clinics from "../icons/HealthCare/Clinics";
import Disabilities from "../icons/HealthCare/Disabilities";
import Lab from "../icons/HealthCare/Lab";
import { useState } from "react";
import Description from "./Description";

const Services = () => {
  const { t } = useTranslation("home");
  const services = [
    {
      id: "clinics",
      title: t("clinics"),
      icon: <Clinics />,
      image: service2,
    },
    {
      id: "ambulance",
      title: t("ambulance"),
      icon: <Ambulance />,
      image: service1,
    },
    {
      id: "disabilities",
      title: t("disabilities"),
      icon: <Disabilities />,
      image: service3,
    },
    {
      id: "lab",
      title: t("lab"),
      icon: <Lab />,
      image: service4,
    },
  ];
  const [expandedService, setExpandedService] = useState(services[0]);

  const handleServiceClick = (serviceId) => {
    setExpandedService((prev) => (prev === serviceId ? null : serviceId));
  };

  return (
    <section className="container my-8">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleServiceClick(service.id)}
            className={`cursor-pointer border border-[#CBCBCB] rounded-3xl flex flex-col items-center pt-4 hover:bg-[#F1F1F1] lg:h-[362px] ${expandedService === service.id ? "bg-[#F1F1F1]" : ""}`}
          >
            <img
              src={service.image}
              className="w-full h-full object-cover"
              alt={service.title}
            />
            <div className="flex  p-2 bg-[#FFFFFF] rounded-full mt-[-10%] items-center justify-center">
              {service.icon}
            </div>
            <h1 className="text-[#1E1E1E] font-bold lg:text-[32px] text-center leading-[40px] text-sm lg:mt-8 mt-1 sm:h-32">
              {service.title}
            </h1>
          </div>
        ))}
      </div>

      {expandedService && (
        <div className="mt-8">
          <Description service={expandedService} />
        </div>
      )}
    </section>
  );
};

export default Services;
