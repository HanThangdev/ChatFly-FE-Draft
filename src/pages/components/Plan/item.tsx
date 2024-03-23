import IconWhite from "./iconWhite";
import IconPopular from "./iconPopular";

type Items = {
  text: string;
  coming: boolean;
};

interface ItemsProps {
  items: Items[];
  text: string;
  price: number;
  isBlue: boolean;
  isMonth: boolean;
}

function ItemPlan({ items, text, price, isBlue, isMonth }: ItemsProps) {
  return (
    <div>
      {isBlue ? (
        <div className="bg-button-plan h-[32px] rounded-t-[12px] text-[14px] font-bold leading-6 flex justify-center items-center gap-2">
          Most popular <IconPopular />
        </div>
      ) : (
        <div className="h-[32px]"></div>
      )}
      <div className="bg-planoverlay border-[1px] border-gray-255 h-[719px] w-[216px] px-4 pt-5 pb-8 text-[14px] font-normal rounded leading-6">
        <p className="text-blue text-[16px] font-bold leading-6 uppercase">
          {text}
        </p>
        <p className="text-white text-[32px] font-bold leading-10 flex gap-2">
          ${price}
          {!isMonth && 0}
          <span className="text-white-80 text-[16px] leading-6">
            /{isMonth ? "month" : "year"}
          </span>
        </p>
        <p className="text-[14px] text-white leading-6">
          For individuals starting out with automation.
        </p>
        <div
          className={`my-[24px] border-[1px] text-[14px] leading-6 cursor-pointer border-gray-255 rounded-lg py-2 px-4 h-[40px] flex items-center justify-center ${
            isBlue ? "bg-btnStart shadow-inner-sm" : "bg-[#000E1A] shadow-inner-sx"
          }`}
        >
          <a
            href={`${process.env.REACT_APP_URL_ADMIN_PAGE}/price`}
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            {text === "Free" ? "Get started" : `Upgrade to ${text}`}
          </a>
        </div>
        {items.map((item, index) => (
          <div
            className="text-white-80 flex gap-2 items-center h-[40px]"
            key={index}
          >
            <span className="w-fit">
              <IconWhite />
            </span>{" "}
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemPlan;
