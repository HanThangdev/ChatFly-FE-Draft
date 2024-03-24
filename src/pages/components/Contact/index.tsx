import Image from "next/image";
import { iconBlue } from "@/assets/icon";
import IconPerson from "./IconPerson";
import IconEye from "./IconEye";
import IconSetting from "./IconSetting";
import IconLock from "./IconLock";
import { useEffect } from "react";
export default function Contact() {

  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head?.appendChild(script);
  }, []);

  return (
    <div
      id="contact"
      className="flex-col lg:py-40 py-10 bg-contact relative w-full lg:px-0 px-8"
    >
      <div className="min-h-xl max-w-screen-xl m-auto grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="flex relative z-10 lg:text-[20px] text-base font-normal text-blue leading-8 uppercase">
            CONTACT US
          </div>
          <div className="flex relative w-fit text-white font-semibold lg:text-[40px] lg:leading-[52px] text-xl">
            Get a demo with us
            <Image
              src={iconBlue}
              className="absolute filter opacity-90 animate-blob lg:right-[135px] w-[120px] bottom-[-5px]"
              alt="icon-blue"
            />
          </div>
          <div className="flex relative text-[20px] font-normal mt-[32px] mb-[24px] text-white-80 leading-8">
            Talk to our team to see how Chatfly can help your team create and
            launch AI Chatbots in minutes. What we&apos;ll share during the
            call:
          </div>
          <div className="mt-[40px] gap-6 grid">
            <div className="flex items-center text-[16px] leading-6 font-bold gap-4 h-[40px] text-white">
              <div className="h-[40px] w-[40px] bg-button-plan rounded flex justify-center items-center">
                <IconLock />
              </div>
              How Chatfly helps you save time and money
            </div>
            <div className="flex items-center text-[16px] leading-6 font-bold gap-4 h-[40px] text-white">
              <div className="h-[40px] w-[40px] bg-button-plan rounded flex justify-center items-center">
                <IconSetting />
              </div>
              How to set up an AI chatbot in a minutes
            </div>
            <div className="flex items-center text-[16px] leading-6 font-bold gap-4 h-[40px] text-white">
              <div className="h-[40px] w-[40px] bg-button-plan rounded flex justify-center items-center">
                <IconPerson />
              </div>
              How to simplify your customer service
            </div>
            <div className="flex items-center text-[16px] leading-6 font-bold gap-4 h-[40px] text-white">
              <div className="h-[40px] w-[40px] bg-button-plan rounded flex justify-center items-center">
                <IconEye />
              </div>
              Learn which plan is right for your team
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <div
            className="calendly-inline-widget h-full"
            data-url="https://calendly.com/namtp-it/30min?month=2023-09"
            style={{ minHeight: "650px", width: "100%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
