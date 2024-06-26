import React from "react";

const CardStep = () => {
  return (
    <div className="border dark:border-[#333766] border-white dark:bg-transparent bg-white rounded-lg p-8 w-full mt-6">
      <h2 className="font-medium text-xl mb-9 dark:text-white text-[#080033]">
        How to buy with bank card
      </h2>
      <div className="flex">
        <div className="w-1/4 relative">
          <div className="h-8 w-8 dark:bg-[#7F66FF] bg-[#7F66FF] rounded-full flex justify-center items-center font-bold text-[#F2F2F2] dark:text-[#F2F2F2]">
            1
          </div>
          <div className="dark:border-[#333766] border-[#F2F2F2] border top-[16px] absolute w-full left-8"></div>
          <p className="dark:text-[#F2F2F2] mt-5 text-[#808080]">
            Input amount and select payment method
          </p>
        </div>
        <div className="w-1/4 relative">
          <div className="h-8 w-8 dark:bg-[#2C3058] bg-[#F2F2F2] rounded-full flex justify-center items-center font-bold text-[#080033] dark:text-[#F2F2F2]">
            2
          </div>
          <div className="dark:border-[#333766] border-[#F2F2F2] border top-[16px] absolute w-full left-8"></div>
          <p className="dark:text-[#F2F2F2] mt-5 text-[#808080]">
            Confirm payment details
          </p>
        </div>
        <div className="w-1/4 relative">
          <div className="h-8 w-8 dark:bg-[#2C3058] bg-[#F2F2F2] rounded-full flex justify-center items-center font-bold text-[#080033] dark:text-[#F2F2F2]">
            3
          </div>
          <div className="dark:border-[#333766] border-[#F2F2F2] border top-[16px] absolute w-full left-8"></div>
          <p className="dark:text-[#F2F2F2] mt-5 text-[#808080]">
            Complete 3DS Safety Certification
          </p>
        </div>
        <div className="w-1/4 relative">
          <div className="h-8 w-8 dark:bg-[#2C3058] bg-[#F2F2F2] rounded-full flex justify-center items-center font-bold text-[#080033] dark:text-[#F2F2F2]">
            4
          </div>
          <p className="dark:text-[#F2F2F2] mt-5 text-[#808080]">
            Complete payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardStep;
