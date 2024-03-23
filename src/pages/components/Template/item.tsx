import Image from "next/image";
import IconDirect from "./iconDirect";
interface ItemsProps {
  item: any;
}

function ItemTemplate({ item }: ItemsProps) {
  return (
    <div className="rounded-lg h-[413px] w-full border-[1px] border-gray-255">
      <div className="h-[189px] mb-[20px]">
        <Image src={item.imageurl} alt="" className="h-full rounded-t-lg" />
      </div>
      <div className="px-6 grid gap-4 text-white">
        <p className="text-[20px] font-bold leading-8">{item.title}</p>
        <p className="text-[16px] font-normal leading-6">{item.description}</p>
        <p className="h-[48px] cursor-pointer text-[#3169E6] flex items-center gap-4 text-[16px] font-bold leading-6">
          {item.text}
          <IconDirect />
        </p>
      </div>
    </div>
  );
}

export default ItemTemplate;
