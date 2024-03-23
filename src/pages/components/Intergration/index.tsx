import Image from "next/image";
import { iconBlue } from "@/assets/icon";
import { imageIntergration } from "@/assets/images";

export default function Intergration() {
  return (
    <div id="intergrations" className="flex-col py-[160px] bg-intergration relative w-full">
      <div className="min-h-xl max-w-screen-lg m-auto flex-col justify-center">
        <div className="flex relative z-10 justify-center lg:text-[20px] text-base font-normal text-blue leading-8 uppercase">
          INTERGRATION
        </div>
        <div className="flex relative z-10 w-fit m-auto text-white font-semibold lg:text-[40px] text-xl leading-[52px]">
          Connect Chatfly with 1,000+ App
          <Image
            src={iconBlue}
            className="absolute filter opacity-90 animate-blob right-0 bottom-[-5px]"
            alt="icon-blue"
          />
        </div>
        <div className="mt-[80px]">
          <Image src={imageIntergration} className="" alt="intergration" />
        </div>
      </div>
    </div>
  );
}
