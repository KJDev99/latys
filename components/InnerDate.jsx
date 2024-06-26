import { useState } from "react";

const InnerDate = () => {
  const [activeComponent, setActiveComponent] = useState("one");
  return (
    <div className="flex justify-end w-full mt-5 mb-3">
      <button
        className={`py-2 px-3 m-2 rounded ${
          activeComponent === "one"
            ? "dark:bg-[#2C3058] bg-[#7F66FF] text-white dark:text-[#7F66FF]"
            : "bg-transparent dark:text-[white] text-[#808080]"
        }`}
        onClick={() => setActiveComponent("one")}
      >
        1M
      </button>
      <button
        className={`py-2 px-3 m-2 rounded ${
          activeComponent === "two"
            ? "dark:bg-[#2C3058] bg-[#7F66FF] text-white dark:text-[#7F66FF]"
            : "bg-transparent dark:text-[#999999] text-[#808080]"
        }`}
        onClick={() => setActiveComponent("two")}
      >
        1H
      </button>
      <button
        className={`py-2 px-3 m-2 rounded ${
          activeComponent === "three"
            ? "dark:bg-[#2C3058] bg-[#7F66FF] text-white dark:text-[#7F66FF]"
            : "bg-transparent dark:text-[#999999] text-[#808080]"
        }`}
        onClick={() => setActiveComponent("three")}
      >
        1D
      </button>
    </div>
  );
};

export default InnerDate;
