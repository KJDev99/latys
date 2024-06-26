"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiErrorWarningLine } from "react-icons/ri";

const InnerMenu = () => {
  const router = usePathname();

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Buy/Sell History", path: "/buysell" },
  ];

  return (
    <nav className="flex pt-8   px-2 sm:px-6 lg:px-8 justify-between border-b dark:border-[#333766] border-[#CCCCCC]">
      <div className="flex gap-4 ">
        {menuItems.map((item) => (
          <Link href={item.path} key={item.name}>
            <p
              className={`px-1 py-2  ${
                router === item.path
                  ? "text-[#7F66FF] pb-4 border-[#7F66FF] border-b-2"
                  : "dark:text-[#B3B3B3] text-[#808080]"
              } `}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex items-center dark:text-[#F2F2F2] text-[#080033]">
        <RiErrorWarningLine className="mr-1 text-[#B3B3B3] dark:text-[#B3B3B3]" />
        <p>Need help?</p>
      </div>
    </nav>
  );
};

export default InnerMenu;
