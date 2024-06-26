import React from "react";

const Button = ({ text }) => {
  return (
    <button className="w-full py-3 text text-[#F2F2F2] bg-[#7F66FF] rounded-md">
      {text}
    </button>
  );
};

export default Button;
