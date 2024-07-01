"use client";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import OrderItem from "@/components/OrderItem";
import DropdownExample from "@/components/Dropdown";
const Trade = () => {
  const [activeComponent, setActiveComponent] = useState("BTC/USD");
  const [myMoney, setMoney] = useState("2.32533");
  const [myPrice, setPrice] = useState("4.23546");
  const [myFullName, setMyFullName] = useState("BTC/USD");
  const [buyOrder, setBuyOrder] = useState([
    "0.3464 BTC",
    "$1,658",
    "20.02.24",
  ]);
  const [sellOrder, setSellOrder] = useState([
    "0.2364 BTC",
    "$0,858",
    "20.02.24",
  ]);
  useEffect(() => {
    if (activeComponent == "BTC/USD") {
      setMoney("2.32533");
      setPrice("4.23546");
      setMyFullName("BTC/USD");
      setBuyOrder(["0.3464 BTC", "$1,658", "20.02.24"]);
      setSellOrder(["0.2364 BTC", "$0,858", "20.02.24"]);
    } else if (activeComponent == "USDT/USD") {
      setMoney("1.32434");
      setPrice("23.4324");
      setMyFullName("USDT/USD");
      setBuyOrder(["0.1234 BTC", "$1,654", "21.02.24"]);
      setSellOrder(["0.4444 BTC", "$0,111", "21.02.24"]);
    } else if (activeComponent == "ETH/USD") {
      setMoney("6.45647");
      setPrice("8.67535");
      setMyFullName("ETH/USD");
      setBuyOrder(["0.7777 BTC", "$1,123", "23.02.24"]);
      setSellOrder(["0.4444 BTC", "$0,222", "23.02.24"]);
    }
  }, [activeComponent]);
  return (
    <div className="dark:bg-[#1E2142] bg-[#FFFFFF] h-screen-minus-80 w-full ">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/5 pt-6 h-screen-minus-80 border-r-2 border-[#E3E3E8] dark:border-[#F4F4F633] ">
            <DropdownExample
              activeComponent={activeComponent}
              setActiveComponent={setActiveComponent}
            />
            <div className="fixed  bottom-10 flex items-center cursor-pointer px-10">
              <div className="rounded-full h-12 w-12 bg-[#F9F9FA] flex items-center justify-center text-[#5235E8] text-3xl">
                +
              </div>
              <p className="text-black px-4 dark:text-white">Create Wallet</p>
            </div>
          </div>
          <div className="w-4/5 pt-6  bg-[#FDFDFD] dark:bg-[#191B32] flex flex-col h-screen-minus-80">
            <div className="w-full px-7 flex flex-col ">
              <div className="dark:bg-[#282B4E] bg-white border-2 dark:border-[#F3F3F333] border-[#F3F3F3] rounded-xl mb-10 px-10 py-8">
                <div className="flex justify-between mt-14">
                  <div className="flex">
                    <img
                      src="./btcusd.svg"
                      alt="btc"
                      className="dark:hidden block w-[100px]"
                    />
                    <img
                      src="./btcusd0.svg"
                      alt="btc"
                      className="hidden dark:block w-[90px]"
                    />
                    <div className="flex flex-col ml-5">
                      <h3 className="text-[32px] dark:text-white">
                        {myFullName} Market
                      </h3>
                      <p className="dark:text-[#717184] text-sm">
                        Currency in USD. Market Open
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex flex-col mr-12">
                      <p className="border flex dark:border-[#C8C8D033] rounded-lg px-3 py-1 dark:bg-[#282B4E] font-medium dark:text-[white] mb-[14px]">
                        $&nbsp;{myMoney}
                      </p>
                      <p className="border flex dark:border-[#C8C8D033] rounded-lg px-3 py-1 dark:bg-[#282B4E] font-medium dark:text-[white]">
                        $&nbsp;{myPrice}
                      </p>
                    </div>
                    <Button text={"Create offer"} />
                  </div>
                </div>
                <div className="flex justify-between gap-8 mt-10">
                  <div className="relative flex flex-col w-full">
                    <button className="border mb-[-1px] bg-white z-10 border-b-0 dark:border-[#E7E3FC33] dark:text-[#fff] rounded-t-xl dark:bg-[#191B32] px-4 pt-3 pb-3 w-max">
                      Buy Orders
                    </button>
                    <div className="flex flex-col w-full rounded-b-xl rounded-e-xl dark:bg-[#191B32] border dark:border-[#E7E3FC33] dark:text-[#fff] px-6 py-4">
                      <div className="py-3 flex justify-between items-center dark:bg-[#1E2142] bg-[#F9F9FA] w-full mb-4">
                        <div className="w-1/3 flex justify-center">
                          <p className="dark:text-[#7F66FF] font-medium text-sm">
                            Amount
                          </p>
                        </div>
                        <div className="w-1/3 flex justify-center">
                          <p className="dark:text-[#7F66FF] font-medium text-sm">
                            Price
                          </p>
                        </div>
                        <div className="w-1/3 flex justify-center">
                          <p className="dark:text-[#7F66FF] font-medium text-sm">
                            Expiry
                          </p>
                        </div>
                      </div>
                      <OrderItem
                        num0={buyOrder[0]}
                        num1={buyOrder[1]}
                        num2={buyOrder[2]}
                      />
                      <OrderItem
                        num0={"0.3464 BTC"}
                        num1={"$1,658"}
                        num2={"20.02.24"}
                      />
                      <OrderItem
                        num0={"0.3464 BTC"}
                        num1={"$1,658"}
                        num2={"20.02.24"}
                      />
                      <OrderItem
                        num0={"0.3464 BTC"}
                        num1={"$1,658"}
                        num2={"20.02.24"}
                      />
                    </div>
                  </div>
                  <div className="relative flex flex-col w-full">
                    <button className="border mb-[-1px] z-10 border-b-0 bg-white   dark:border-[#E7E3FC33] dark:text-[#fff] rounded-t-xl dark:bg-[#191B32] px-4 pt-3 pb-3 w-max">
                      Sell Orders
                    </button>
                    <div className="flex flex-col w-full rounded-b-xl rounded-e-xl dark:bg-[#191B32] border dark:border-[#E7E3FC33] dark:text-[#fff] px-6 py-4">
                      <div className="py-3 flex justify-between items-center dark:bg-[#1E2142] bg-[#F9F9FA] w-full mb-4">
                        <div className="w-1/3 flex justify-center">
                          <p className="dark:text-[#7F66FF] font-medium text-sm">
                            Amount
                          </p>
                        </div>
                        <div className="w-1/3 flex justify-center">
                          <p className="dark:text-[#7F66FF] font-medium text-sm">
                            Price
                          </p>
                        </div>
                        <div className="w-1/3 flex justify-center">
                          <p className="dark:text-[#7F66FF] font-medium text-sm">
                            Expiry
                          </p>
                        </div>
                      </div>
                      <OrderItem
                        num0={sellOrder[0]}
                        num1={sellOrder[1]}
                        num2={sellOrder[2]}
                      />
                      <OrderItem
                        num0={"0.3464 BTC"}
                        num1={"$1,658"}
                        num2={"20.02.24"}
                      />
                      <OrderItem
                        num0={"0.3464 BTC"}
                        num1={"$1,658"}
                        num2={"20.02.24"}
                      />
                      <OrderItem
                        num0={"0.3464 BTC"}
                        num1={"$1,658"}
                        num2={"20.02.24"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
