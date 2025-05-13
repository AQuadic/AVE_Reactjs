import React from "react";

const OpinionCard = ({ isGolden }) => {
  return (
    <div
      className={`w-[350px] sm:w-[600px] mx-5 p-6 ${isGolden ? "yellow-gradient text-white" : "bg-white text-black"} rounded-xl`}
    >
      <p>
        لوريم إيبسوم هو ببساطة نص شكلي (بلا معنى) يُستخدم في صناعة الطباعة
        والتنضيد. وقد كان لوريم إيبسوم النص الشكلي القياسي لهذه الصناعة على
        الإطلاق... اقرأ المزيد
      </p>
    </div>
  );
};

export default OpinionCard;
