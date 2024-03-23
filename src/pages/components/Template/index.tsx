import Image from "next/image";
import { iconBlue } from "@/images";
import ItemTemplate from "./item";
import { templates } from "@/constants/template";

export default function Template() {
  return (
    <div className="flex-col py-[160px] bg-bgDark relative w-full">
      <div className="min-h-xl max-w-screen-lg m-auto flex-col justify-center">
        <div className="flex relative z-10 justify-center text-[20px] font-normal text-blue leading-8 uppercase">
          AI CHATBOT TEMPLATES
        </div>
        <div className="flex relative z-10 w-fit m-auto text-white font-semibold text-[40px] leading-[52px]">
          Get Started With Chatfly In A Minutes
          <Image
            src={iconBlue}
            className="absolute filter opacity-90 animate-blob right-0 bottom-[-5px]"
            alt="icon-blue"
          />
        </div>
        <div className="mt-[40px] text-white bg-button-plan w-[226px] text-[16px] font-bold m-auto h-[48px] rounded-[12px] flex items-center justify-center">
          Start building —
          <span className="text-[#D1D2D5] ml-1">it&apos;s free</span>
        </div>
        <div className="mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {templates.map((item, index) => (
            <ItemTemplate key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
