"use client";
import { useState } from "react";

const languages = [
  {
    name: "Euros",
  },
  { name: "USD" },
  { name: "USD Coin" },
];

export default function ConverterSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedCoin, setSelectedCoin] = useState(languages[2]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  const selectCoin = (coin) => {
    setSelectedCoin(coin);
    setIsOpen2(false);
  };

  return (
    <div className="relative inline-block text-left z-10 dark:bg-[#2C3058] bg-[white] border border-[#C8C8D0] dark:border-[#C8C8D033] w-full rounded-lg mb-4">
      <div className="flex border-b border-[#C8C8D0] dark:border-[#C8C8D033]">
        <h2 className="m-4 w-1/3 border-r border-[#E3E3E833] text-[#F6F6F6]">
          From
        </h2>
        <button
          type="button"
          className="flex justify-between items-center rounded-md dark:text-[#F2F2F2] px-4 py-1 w-2/3"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          <div className="flex">{selectedLanguage.name}</div>
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

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-max px-8 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => selectLanguage(language)}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                  role="menuitem"
                >
                  {language.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex">
        <h2 className="m-4 w-1/3 border-r border-[#E3E3E833] text-[#F6F6F6]">
          Too
        </h2>
        <button
          type="button"
          className="flex justify-between items-center rounded-md dark:text-[#F2F2F2] px-4 py-1 w-2/3"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown2}
        >
          <div className="flex">{selectedCoin.name}</div>
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

        {isOpen2 && (
          <div className="origin-top-right absolute right-0 mt-2 w-max px-8 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => selectCoin(language)}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                  role="menuitem"
                >
                  {language.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
