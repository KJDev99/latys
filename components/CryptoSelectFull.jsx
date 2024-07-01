import { useState } from "react";
import { RiBtcFill } from "react-icons/ri";
import thr from "@/assets/images/Tokens.svg";
import Image from "next/image";
import { IoEarthOutline } from "react-icons/io5";
import cash from "@/assets/images/cash.svg";

const crtypo = [
  {
    name: "BTC",
    icon: <RiBtcFill className="text-[#F7931A] text-3xl mr-2" />,
  },
  {
    name: "Card",
    icon: <Image alt="img" src={cash} className="mr-2 h-6 w-6" />,
  },
  { name: "USD", icon: <IoEarthOutline className="text-2xl mr-2" /> },
];

export default function CryptoSelectFull({ num, title, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCryptoFull, setSelectedCryptoFull] = useState(crtypo[num]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectLanguage = (language, index) => {
    setSelectedCryptoFull(language);
    setIsOpen(false);
    onChange(index);
  };

  return (
    <div className="relative block text-left">
      {title && (
        <p className="mb-1 mt-5 font-medium text-[#080033] dark:text-white">
          {title}
        </p>
      )}
      <div className="flex justify-between">
        <button
          type="button"
          className="flex justify-between items-center rounded-md px-4 h-[50px] bg-[#F2F2F2]  w-full text-[#080033] dark:bg-[#272A4E] dark:text-[#F2F2F2]"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          <div className="flex items-center">
            {selectedCryptoFull.icon}
            {selectedCryptoFull.name}
          </div>
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="w-full origin-top-right absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {crtypo.map((language, index) => (
              <button
                key={index}
                onClick={() => selectLanguage(language, index)}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                role="menuitem"
              >
                {language.icon}
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
