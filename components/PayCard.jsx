import { useState } from "react";
import { CgCreditCard } from "react-icons/cg";
import cash from "@/assets/images/cash.svg";
import p2p from "@/assets/images/Two-Person.svg";
import PaymentIcons from "@/assets/images/PaymentIcons.png";
import PaymentIcons1 from "@/assets/images/PaymentIcons1.png";
import Image from "next/image";

const options = [
  {
    id: 1,
    label: "Debit Card",
    icon: <CgCreditCard className="text-[#B3B3B3] text-2xl mr-2 " />,
    img: [
      <Image alt="img" src={PaymentIcons} className="h-6 w-8 mr-1" />,
      <Image alt="img" src={PaymentIcons1} className="h-6 w-8" />,
    ],
  },
  {
    id: 2,
    label: "P2P Trading",
    icon: <Image alt="img" src={p2p} className="mr-2 h-6 w-6" />,
  },
  {
    id: 3,
    label: "Cash Balance",
    icon: <Image alt="img" src={cash} className="mr-2 h-6 w-6" />,
    cash: "0.00 EUR",
  },
  {
    id: 4,
    label: "Other Payment",
    icon: <CgCreditCard className="text-[#B3B3B3] text-2xl mr-2 " />,
  },
];

export default function PayCard() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <div className="flex flex-wrap justify-between items-start mt-9">
      {options.map((option) => (
        <label
          key={option.id}
          className="inline-flex justify-start items-center rounded-md px-4 mb-4 h-[110px] bg-[#F2F2F2]  w-[48%] text-[#080033] dark:bg-[#272A4E] dark:text-[#F2F2F2] relative"
        >
          <input
            type="checkbox"
            checked={selectedOption === option.id}
            onChange={() => handleCheckboxChange(option.id)}
            className="form-checkbox h-5 w-5 border-none outline-none absolute top-2 right-2"
          />
          <div className="flex items-center">
            {option.icon}
            <div className="flex flex-col">
              <span className="text-sm text-[#080033] dark:text-[#F2F2F2]">
                {option.label}
              </span>
              {option.img && (
                <div className="flex items-center">
                  {option.img[0]}
                  {option.img[1]}
                </div>
              )}
              {option.cash && (
                <div className="flex items-center text-xs text-[#999999]">
                  {option.cash}
                </div>
              )}
            </div>
          </div>
        </label>
      ))}
    </div>
  );
}
