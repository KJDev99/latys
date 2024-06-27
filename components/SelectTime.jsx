import { useState } from "react";

const crtypo = [
  {
    name: "Weekly",
  },
  {
    name: "Monthly",
  },
  { name: "Daily" },
];

export default function SelectTime({ num }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(crtypo[num]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectLanguage = (language) => {
    setSelectedTime(language);
    setIsOpen(false);
  };

  return (
    <div className="relative block text-left ml-4">
      <div className="flex justify-between w-full">
        <button
          type="button"
          className="flex justify-between items-center rounded-md px-4 h-[50px] bg-[#F2F2F2]  w-max text-[#080033] dark:bg-[#272A4E] dark:text-[#F2F2F2] mr-4"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          <div className="flex items-center">{selectedTime.name}</div>
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
        <div className="origin-top-right absolute left-0 mt-2 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {crtypo.map((language, index) => (
              <button
                key={index}
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
  );
}
