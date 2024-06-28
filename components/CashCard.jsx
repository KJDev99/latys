import React from "react";

const CashCard = ({ img, title, text }) => {
  return (
    <div className="flex flex-col w-max dark:bg-[#1F2243] bg-white border-2 dark:border-[#F3F3F333] border-[#F3F3F3] rounded-xl py-6 px-8">
      <img src={img} alt="cash" className="h-10 w-10" />
      <h3 className="text-lg mt-3 mb-2 dark:text-white">{title}</h3>
      <p className="font-semibold text-2xl dark:text-white">{text}</p>
    </div>
  );
};

export default CashCard;
