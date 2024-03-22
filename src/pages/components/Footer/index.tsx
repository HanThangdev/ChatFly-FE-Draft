import React from "react";
import LogoDark from '../../../../public/assets/logo_dark.png';
import Image from "next/image";
import iconFacebook from '../../../../public/assets/icon-facebook.png';
import iconDiscord from '../../../../public/assets/icon-discord.png';
import iconYoutube from '../../../../public/assets/icon-youtube.png';
import iconLn from '../../../../public/assets/icon-linkedin.png';
import iconTwitter from '../../../../public/assets/icon-twitter.png';
import { Dropdown, MenuProps, Space } from "antd";
import flagUk from '../../../../public/assets/flag-uk.png';
import flagVi from '../../../../public/assets/flag-vietnam.svg';
import flagJa from '../../../../public/assets/flag-japan.svg';


export default function Footer() {

  const items: MenuProps['items'] = [
    {
      key: '0',
      icon: <Image src={flagVi} alt="icon document" />,
      label: <p>Vietnamese</p>,
    },
    {
      key: '1',
      icon: <Image src={flagUk} alt="icon blog" className="ml-[3px]" />,
      label: <p>English</p>,
    },
    {
      key: '2',
      icon: <Image src={flagJa} alt="icon blog" className="ml-[3px]" />,
      label: <p>Japanese</p>,
    },
  ];

  return (
    <footer
      className="bg-[#000E1A] pt-40 pb-24"
    >
      <div className="bg-bgFooter text-center pb-12">
        <h2 className="text-[#FFFFFF] font-semibold text-[40px]">Ready To Get Started?</h2>
        <p className="font-normal text-xl text-[#D1D2D5] py-6">Want to see how Chafly can help you? Book a demo with us!</p>
        <div className="pb-48">
          <button className="mr-4 text-white px-5 py-3 border-[1px] border-[#FFFFFF33] gap-8 rounded-lg shadow-inner-sx bg-btnStart">Sign Up — it&apos;s free</button>
          <button className="text-white bg-[#000E1A] px-5 py-3 border-[1px] border-[#FFFFFF33] gap-8 rounded-lg shadow-inner-sm">Get a Demo</button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto sm:px-6">
        <div className="flex justify-between gap-8 py-16 md:py-12 border-b border-[#FFFFFF1A]">
          <div className="mb-2 w-[28%]">
            <Image
              src={LogoDark}
              alt="Logo dark"
            />
            <p className="text-[14px] leading-6 text-[#D1D2D5] py-5">Al chatbot builder that utilizes AI to analyze your data and integrate Chat widget into your site.</p>
            <div className="flex gap-4 py-4 ">
              <Image
                src={iconFacebook}
                alt="Icon"
              />
              <Image
                src={iconLn}
                alt="Icon"
              />
              <Image
                src={iconYoutube}
                alt="Icon"
              />
              <Image
                src={iconDiscord}
                alt="Icon"
              />
              <Image
                src={iconTwitter}
                alt="Icon"
              />
            </div>
          </div>
          <div className="py-6 flex w-1/2 justify-between">
            <ul className="font-medium text-sm text-white list-none gap-4 space-y-3">
              <li>Product</li>
              <li className="text-[#D1D2D5] cursor-pointer">Sign Up</li>
              <li className="text-[#D1D2D5] cursor-pointer">Log In</li>
            </ul>
            <ul className="font-medium text-sm text-white list-none gap-4 space-y-3">
              <li>Resources</li>
              <li className="text-[#D1D2D5] cursor-pointer">About us</li>
              <li className="text-[#D1D2D5] cursor-pointer">Terms of Service</li>
              <li className="text-[#D1D2D5] cursor-pointer">Privacy policy</li>
            </ul>
            <ul className="font-medium text-sm text-white list-none gap-4 space-y-3">
              <li>Contact Us</li>
              <li className="text-[#D1D2D5] cursor-pointer">
                <div className="flex items-center">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8465 13.6777C13.8465 13.9177 13.7932 14.1644 13.6799 14.4044C13.5665 14.6444 13.4199 14.871 13.2265 15.0844C12.8999 15.4444 12.5399 15.7044 12.1332 15.871C11.7332 16.0377 11.2999 16.1244 10.8332 16.1244C10.1532 16.1244 9.42654 15.9644 8.65987 15.6377C7.8932 15.311 7.12654 14.871 6.36654 14.3177C5.59987 13.7577 4.8732 13.1377 4.17987 12.451C3.4932 11.7577 2.8732 11.031 2.31987 10.271C1.7732 9.51102 1.3332 8.75102 1.0132 7.99768C0.693203 7.23768 0.533203 6.51102 0.533203 5.81768C0.533203 5.36435 0.613203 4.93102 0.773203 4.53102C0.933203 4.12435 1.18654 3.75102 1.53987 3.41768C1.96654 2.99768 2.4332 2.79102 2.92654 2.79102C3.1132 2.79102 3.29987 2.83102 3.46654 2.91102C3.63987 2.99102 3.7932 3.11102 3.9132 3.28435L5.45987 5.46435C5.57987 5.63102 5.66654 5.78435 5.72654 5.93102C5.78654 6.07102 5.81987 6.21102 5.81987 6.33768C5.81987 6.49768 5.7732 6.65768 5.67987 6.81102C5.5932 6.96435 5.46654 7.12435 5.30654 7.28435L4.79987 7.81102C4.72654 7.88435 4.6932 7.97102 4.6932 8.07768C4.6932 8.13102 4.69987 8.17768 4.7132 8.23102C4.7332 8.28435 4.7532 8.32435 4.76654 8.36435C4.88654 8.58435 5.0932 8.87102 5.38654 9.21768C5.68654 9.56435 6.00654 9.91768 6.3532 10.271C6.7132 10.6244 7.05987 10.951 7.4132 11.251C7.75987 11.5443 8.04654 11.7443 8.2732 11.8643C8.30654 11.8777 8.34654 11.8977 8.3932 11.9177C8.44654 11.9377 8.49987 11.9443 8.55987 11.9443C8.6732 11.9443 8.75987 11.9044 8.8332 11.831L9.33987 11.331C9.50654 11.1644 9.66654 11.0377 9.81987 10.9577C9.9732 10.8643 10.1265 10.8177 10.2932 10.8177C10.4199 10.8177 10.5532 10.8443 10.6999 10.9043C10.8465 10.9643 10.9999 11.051 11.1665 11.1644L13.3732 12.731C13.5465 12.851 13.6665 12.991 13.7399 13.1577C13.8065 13.3243 13.8465 13.491 13.8465 13.6777Z" stroke="#D1D2D5" strokeWidth="0.96" strokeMiterlimit="10" />
                    <path d="M11.5335 7.45736C11.5335 7.05736 11.2202 6.44402 10.7535 5.94402C10.3269 5.48402 9.7602 5.12402 9.2002 5.12402" stroke="#D1D2D5" strokeWidth="0.96" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8669 7.45768C13.8669 4.87768 11.7802 2.79102 9.2002 2.79102" stroke="#D1D2D5" strokeWidth="0.96" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="ml-1">
                    (+84)0337788044
                  </p>
                </div>
              </li>
              <li className="text-[#D1D2D5] cursor-pointer">
                <div className="flex items-center">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.333 14.3245H4.66634C2.66634 14.3245 1.33301 13.3245 1.33301 10.9912V6.32454C1.33301 3.99121 2.66634 2.99121 4.66634 2.99121H11.333C13.333 2.99121 14.6663 3.99121 14.6663 6.32454V10.9912C14.6663 13.3245 13.333 14.3245 11.333 14.3245Z" stroke="#D1D2D5" strokeWidth="0.96" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.3337 6.6582L9.24699 8.32487C8.56032 8.87154 7.43366 8.87154 6.74699 8.32487L4.66699 6.6582" stroke="#D1D2D5" strokeWidth="0.96" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="ml-1">
                    contact@chatfly.co
                  </p>
                </div></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-sm text-white mr-4 font-extralight mt-8">
            &copy; 2023 ChatFly. All rights reserved.
          </div>
          <div>
            <Dropdown menu={{ items }} trigger={['click']} className="flex px-4 py-5 font-medium text-sm items-center transition duration-150 ease-in-out cursor-pointer text-[#D1D2D5] hover:text-[#2d40e7cb]">
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Image src={flagUk} alt="flag US" />
                  English
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 ml-0.5">
                    <path d="M13.4583 5.6665L8.79167 10.3332L4.125 5.6665" stroke="#D1D2D5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </footer>
  );
}

