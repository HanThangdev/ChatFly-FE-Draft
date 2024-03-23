import Image from "next/image";
import { useState } from "react";
import ItemPlan from "./item";
import { allItems } from "@/constants/plan";
import { iconBlue } from "@/assets/icon";
export default function Plan() {
  const [isMonth, setIsMonth] = useState<boolean>(true);

  return (
    <div id="pricing" className="flex-col py-[160px] bg-[#000E1A] relative w-full">
      <div className="min-h-xl max-w-screen-xl m-auto flex-col justify-center">
        <div className="flex relative w-fit m-auto text-white font-semibold lg:text-[40px] text-xl leading-[52px]">
          Only Pay For What You Need
          <Image
            src={iconBlue}
            className="absolute filter opacity-90 animate-blob right-0 bottom-[-5px]"
            alt="icon-blue"
          />
        </div>
        <div className="flex relative justify-center lg:text-[20px] text-base font-normal mt-[32px] mb-[24px] text-white-80 leading-8 text-center">
          Start with the free plan to test all features without any cost.
        </div>
        <div className="grid grid-cols-2 justify-center text-[14px] m-auto p-1 gap-2 w-[368px] h-[42px] rounded-[100px] border-[1px] border-gray-255">
          <div
            className={`font-bold flex justify-center items-center rounded-[100px] cursor-pointer ${
              isMonth ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => setIsMonth(true)}
          >
            Monthly
          </div>
          <div
            className={`font-bold flex justify-center items-center rounded-[100px] gap-2.5 cursor-pointer ${
              !isMonth ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => setIsMonth(false)}
          >
            Yearly{" "}
            <span className="text-blue-primary font-normal">(Save 15%)</span>
          </div>
        </div>
        <div className="mt-[72px] flex flex-wrap justify-center gap-8 xl:justify-between">
          {allItems.map((item, index) => (
            <ItemPlan
              key={index}
              items={item.item}
              text={item.text}
              price={item.price}
              isBlue={item.isBlue}
              isMonth={isMonth}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
