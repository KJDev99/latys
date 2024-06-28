import React, { useState } from "react";
import Recently from "./Recently";

const Dropdown = ({ title, img, subtitle, items, isOpen, toggleDropdown }) => {
  return (
    <div className="w-full  my-6  cursor-pointer pl-10">
      <div
        onClick={toggleDropdown}
        className="flex justify-between items-center py-4 border-b-2 border-[#E3E3E8] dark:border-[#E3E3E833]"
      >
        <div className="flex">
          <img src={img} alt={name} className="dark:hidden" />
          <img src={img} alt={name} className="dark:block hidden" />
          <div className="flex flex-col ml-2">
            <p className="text-[#131316] dark:text-[#FFFFFF]">{title}</p>
            <p className="text-[#7F66FF] dark:text-[#9C9CAB] text-sm">
              {subtitle}
            </p>
          </div>
        </div>
        <span className="pr-10 dark:text-white">{isOpen ? "▲" : "▼"}</span>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {items.map((item, index) => (
          <div key={index} className="my-2 ml-8 rounded-lg">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const DropdownExample = () => {
  const [openDropdown, setOpenDropdown] = useState("dropdown1");
  const [activeComponent, setActiveComponent] = useState("BTC/USD");

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div>
      <Dropdown
        title="US DOLLAR"
        subtitle="USD"
        img="Coin.svg"
        items={[
          <div className="w-full cursor-pointer ">
            <Recently
              imgbig={"./btcusd.svg"}
              name={"BTC/USD"}
              activeComponent={activeComponent}
              setActiveComponent={() => setActiveComponent("BTC/USD")}
              rightStyle="1"
            />
          </div>,
          <div className="w-full cursor-pointer">
            <Recently
              imgbig={"./btcusd.svg"}
              name={"USDT/USD"}
              activeComponent={activeComponent}
              setActiveComponent={() => setActiveComponent("USDT/USD")}
              rightStyle="1"
            />
          </div>,
          <div className="w-full cursor-pointer">
            <Recently
              imgbig={"./btcusd.svg"}
              name={"ETH/USD"}
              activeComponent={activeComponent}
              setActiveComponent={() => setActiveComponent("ETH/USD")}
              rightStyle="1"
            />
          </div>,
        ]}
        isOpen={openDropdown === "dropdown1"}
        toggleDropdown={() => toggleDropdown("dropdown1")}
      />
      <Dropdown
        title="EMIRATI DIRHAM"
        subtitle="AED"
        img="Crypto.svg"
        items={[
          <div className="w-full cursor-pointer">
            <Recently
              imgbig={"./btcusd.svg"}
              name={"BTC/USD"}
              activeComponent={activeComponent}
              setActiveComponent={() => setActiveComponent("BTC/USD")}
              rightStyle="1"
            />
          </div>,
          <div className="w-full cursor-pointer">
            <Recently
              imgbig={"./btcusd.svg"}
              name={"USDT/USD"}
              activeComponent={activeComponent}
              setActiveComponent={() => setActiveComponent("USDT/USD")}
              rightStyle="1"
            />
          </div>,
          <div className="w-full cursor-pointer">
            <Recently
              imgbig={"./btcusd.svg"}
              name={"ETH/USD"}
              activeComponent={activeComponent}
              setActiveComponent={() => setActiveComponent("ETH/USD")}
              rightStyle="1"
            />
          </div>,
        ]}
        isOpen={openDropdown === "dropdown2"}
        toggleDropdown={() => toggleDropdown("dropdown2")}
      />
    </div>
  );
};

export default DropdownExample;
