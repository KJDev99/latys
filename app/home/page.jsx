"use client";
import { usePathname } from "next/navigation";
import InnerMenu from "@/components/InnerMenu";
import React from "react";
import BuyCrypto from "@/components/BuyCrypto";
import LineChart from "@/components/LineChart";
import InnerDate from "@/components/InnerDate";
import CryptoCard from "@/components/CryptoCard";
import CardStep from "@/components/CardStep";

const Home = () => {
  const router = usePathname();
  console.log(router);

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Buy/Sell History", path: "/buysell" },
  ];
  return (
    <div className="dark:bg-[#181B33] bg-[#F2F2F2] h-screen-minus-80 w-full  ">
      <div className="container mx-auto">
        <InnerMenu />
        <div className="flex px-2 sm:px-6 lg:px-8 mt-9">
          <div className=" w-1/3 mr-5">
            <BuyCrypto />
          </div>
          <div className="w-2/3">
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex flex-col ml-6">
                  <p className="text-[#808080] font-bold dark:text-white">
                    BTC / BUSD
                  </p>
                  <p className="text-[#080033] font-bold text-[38px] dark:text-[#F2F2F2]">
                    19233.45{" "}
                    <span className="text-[#DD3838] text-sm">-0.17%</span>
                  </p>
                </div>
                <LineChart />
              </div>
              <div className="flex flex-col w-full">
                <InnerDate />
                <CryptoCard />
                <CryptoCard />
                <CryptoCard />
              </div>
            </div>

            <CardStep />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
