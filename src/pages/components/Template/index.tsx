import { iconBlue } from "@/assets/icon";
import { templates } from "@/constants/template";
import Image from "next/image";

export default function Template() {
  return (
    <div className="flex-col lg:py-40 py-5 bg-bgDark relative w-full">
      <div className="min-h-xl max-w-screen-lg m-auto flex-col justify-center">
        <div className="flex relative z-10 justify-center lg:text-[20px] text-base font-normal text-blue leading-8 uppercase">
          AI CHATBOT TEMPLATES
        </div>
        <div className="flex relative z-10 w-fit m-auto text-white font-semibold lg:text-[40px] text-xl leading-[52px]">
          Get Started With Chatfly In A Minutes
          <Image
            src={iconBlue}
            className="absolute filter opacity-90 animate-blob right-0 bottom-[-5px]"
            alt="icon-blue"
          />
        </div>
        <a target="_blank" rel={'noreferrer'} href={`${process.env.REACT_APP_URL_ADMIN_PAGE}/auth/signin`}
          className="mt-[40px] text-white bg-button-plan w-[226px] text-[16px] font-bold m-auto h-[48px] rounded-[12px] flex items-center justify-center">
          Start building —
          <span className="text-[#D1D2D5] ml-1">it&apos;s free</span>
        </a>
        <div className="lg:mt-20 mt-5 flex flex-wrap gap-8 justify-center">
          {templates.map((item, index) => (
            <div className='max-w-[23.5rem]' key={index}>
              <Image src={item.imageurl} alt={item.title} className='rounded-t-2xl' />
              <div className="bg-featureovelay text-white pb-6 rounded-b-2xl px-4 min-h-[11rem]">
                <h5 className="text-[1.25rem] leading-10 pt-6 pb-4 font-semibold">{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
