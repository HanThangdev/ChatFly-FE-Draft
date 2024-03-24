'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Dropdown, MenuProps, Space } from "antd";
import { logoDark } from "@/assets/logo";
import { iconBlog, iconDocBlue } from "@/assets/icon";
import { menuItems } from "@/constants/header";
import MobileMenu from "../MobileMenu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    if (window.performance) {
      if (performance.navigation.type === 1) {
        scrollToTop();
      }
    }
    const handleBeforeUnload = () => {
      scrollToTop();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);


  const items: MenuProps['items'] = [
    {
      key: '0',
      icon: <Image src={iconDocBlue} alt="icon document" />,
      label: <a target="_blank" rel="noreferrer" href={`${process.env.REACT_APP_DOC_PAGE}/documentation/introduction`}>Documentation</a>,
    },
    {
      key: '1',
      icon: <Image src={iconBlog} alt="icon blog" className="ml-[3px]" />,
      label: <a target="_blank" rel="noreferrer" href={`${process.env.REACT_APP_BLOG_PAGE}`}>Blog</a>,
    }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out   ${!top ? "backdrop-blur-sm shadow-lg md:bg-opacity-80" : ""
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4 flex items-center text-gray-400">
            <Image
              src={logoDark}
              alt="Logo dark"
            />
          </div>
          <div>

            <nav className="hidden lg:flex md:grow pl-6">
              <ul className="flex grow justify-center flex-wrap items-center list-none">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="font-medium text-sm text-[#D1D2D5] hover:text-[#2d40e7cb] px-4 py-5 flex items-center transition duration-150 ease-in-out cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li >
                  <Dropdown menu={{ items }} trigger={['click']} className="flex px-4 py-5 font-medium text-sm items-center transition duration-150 ease-in-out cursor-pointer text-[#D1D2D5] hover:text-[#2d40e7cb]">
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Resources
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 ml-0.5">
                          <path d="M13.4583 5.6665L8.79167 10.3332L4.125 5.6665" stroke="#D1D2D5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Space>
                    </a>
                  </Dropdown>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <a target="_blank" rel={'noreferrer'} href={`${process.env.REACT_APP_URL_ADMIN_PAGE}/auth/signin`}
              className="text-white bg-[#000E1A] px-4 py-1 border-[1px] border-[#FFFFFF33] gap-8 rounded-lg shadow-inner-sm">Login</a>
            <a target="_blank" rel={'noreferrer'} href={`${process.env.REACT_APP_URL_ADMIN_PAGE}/auth/signup`}
              className="ml-2 text-white px-4 py-1 border-[1px] border-[#FFFFFF33] gap-8 rounded-lg shadow-inner-sx bg-btnStart">Start for free</a>
          </div>
          < MobileMenu />
        </div>
      </div>
    </header>
  );
};

