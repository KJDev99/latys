import React from "react";

const OrderItem = ({ num0, num1, num2 }) => {
  return (
    <div className="py-5 flex justify-between items-center w-full">
      <div className="w-1/3 flex justify-center">
        <p className="dark:text-[#fff] text-sm">{num0}</p>
      </div>
      <div className="w-1/3 flex justify-center">
        <p className="dark:text-[#fff] text-sm">{num1}</p>
      </div>
      <div className="w-1/3 flex justify-center">
        <p className="dark:text-[#fff] text-sm">{num2}</p>
      </div>
    </div>
  );
};

export default OrderItem;
