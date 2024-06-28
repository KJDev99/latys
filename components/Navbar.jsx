"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import darkLogo from "@/assets/images/dark-logo.svg";
import lightLogo from "@/assets/images/light-logo.svg";
import dollor from "@/assets/images/dollor.svg";
import cashelok from "@/assets/images/cashelok.svg";
import cashelok1 from "@/assets/images/cashelok1.svg";
import tradeing from "@/assets/images/tradeing.svg";
import Link from "next/link";
import profileDefault from "@/assets/images/profile.png";
import { TbLogout2 } from "react-icons/tb";
import { CiSettings, CiDark } from "react-icons/ci";
import LanguageDropdown from "./LanguageDropdown";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/" || pathname === "/signupverification") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [pathname]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="dark:bg-[#191B32] bg-white h-[80px] border-[#E3E3E8] dark:border-[#E3E3E833] border-b-2">
      <div className="container mx-auto">
        <div className=" px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex items-center justify-center md:items-stretch md:justify-start">
              <Link
                className="flex flex-shrink-0 items-center"
                href="/dashboard"
              >
                <Image
                  className="h-10 w-auto"
                  src={darkMode ? darkLogo : lightLogo}
                  alt="PropertyPulse"
                />
              </Link>
            </div>
            <div className="hidden md:ml-6 md:block">
              {isLoggedIn && (
                <div className="flex space-x-2">
                  <Link
                    href="/dashboard"
                    className={`${
                      pathname === "/dashboard" && "bg-[#7F66FF] text-white"
                    } text-[#080033] dark:text-white rounded-md px-3 py-2 flex items-center`}
                  >
                    <LuLayoutDashboard className="mr-2 text-[#9C9CAB]" />
                    Dashboard
                  </Link>
                  <Link
                    href="/trade"
                    className={`${
                      pathname === "/trade" && "bg-[#7F66FF] text-white"
                    } text-[#080033] dark:text-white rounded-md px-3 py-2 flex items-center`}
                  >
                    <Image src={tradeing} alt="img" className="mr-2" />
                    Trade
                  </Link>
                  <Link
                    href="/pay"
                    className={`${
                      pathname === "/pay" && "bg-[#7F66FF] text-white"
                    } text-[#080033] dark:text-white rounded-md px-3 py-2 flex items-center`}
                  >
                    <Image src={dollor} alt="img" className="mr-2" />
                    Pay
                  </Link>
                </div>
              )}
            </div>
            {!isLoggedIn && <LanguageDropdown />}

            {isLoggedIn && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <Link
                  href="/cash"
                  className={`${
                    pathname === "/cash" && "!bg-[#7F66FF] text-white"
                  } relative group flex bg-transparent h-10 w-12 mr-4 items-center justify-center rounded-md`}
                >
                  <Image
                    className="h-6 w-auto "
                    src={
                      darkMode || pathname === "/cash" ? cashelok1 : cashelok
                    }
                    alt="PropertyPulse"
                  />
                </Link>
                <Link href="" className="relative group">
                  <button
                    type="button"
                    className="relative rounded-full p-1 text-black dark:text-white border"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </button>
                </Link>
                {/* <!-- Profile dropdown button --> */}
                <div className="relative ml-4">
                  <div>
                    <button
                      type="button"
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={profileDefault}
                        alt="img"
                      />
                    </button>
                  </div>

                  {isProfileMenuOpen && (
                    <div
                      id="user-menu"
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-[#272A4E] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex="-1"
                    >
                      <Link
                        href=""
                        className="flex items-center px-4 py-2 text-sm text-[#080033] dark:text-white"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-0"
                      >
                        <IoPersonOutline className="text-xl mr-1" />
                        Profile
                      </Link>

                      <button
                        href=""
                        className="flex  items-center justify-between w-full px-4 py-2 text-sm text-[#080033] dark:text-white"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                        onClick={toggleDarkMode}
                      >
                        <div className="flex">
                          <CiDark className="text-xl mr-1" />
                          Switch Mode
                        </div>
                        <div id="button-3">
                          <input
                            type="checkbox"
                            className="checkbox"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                          />
                          <div className="knobs"></div>
                          <div className="layer"></div>
                        </div>
                      </button>
                      <Link
                        href=""
                        className="flex items-center px-4 py-2 text-sm text-[#080033] dark:text-white"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-0"
                      >
                        <CiSettings className="text-xl mr-1" />
                        Settings
                      </Link>
                      <button
                        className="flex items-center px-4 py-2 text-sm text-[#080033] dark:text-white"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        <TbLogout2 className="text-xl mr-1" />
                        <Link href={"/"}>Log Out</Link>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
