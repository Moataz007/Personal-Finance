import {  CarFront, ChevronRight, Gamepad2, ShoppingBag, UtensilsCrossed } from "lucide-react";

export default function Recenttransaction() {
  return (
    <>
    <div className="mb-3">
      <div className="flex justify-between gap-3 mb-2">
        <p className="inter-font font-normal text-[27px] text-[#878787] ">
          Recent Transaction
        </p>
        <button className="flex items-center cursor-pointer text-[#878787] gap-x-1">
          <p className="inter-font font-normal text-[17px] ">View All</p>
          <ChevronRight />
        </button>
      </div>
      {/* all table */}
      <div className="bg-white py-4 px-6 rounded-xl">
        <div className="flex gap-5 mb-3">
            <button className="text-[#299D91] inter-font font-bold text-[16px] cursor-pointer ">All</button>
            <button className="text-[#525256] inter-font font-bold text-[16px] cursor-pointer ">Revenue</button>
            <button className="text-[#525256] inter-font font-bold text-[16px] cursor-pointer ">Expenses</button>
        </div>
        {/* Transactions */}
        <div className="flex flex-col max-h-170 overflow-y-auto">
            {/* Game */}
            <div className=" flex justify-between border-b-2 border-[#F3F3F3] py-6 w-full">
                <div className="flex items-center">
                    <Gamepad2 className="bg-[#F3F3F3] text-gray-500 rounded-lg mr-4 w-10 h-10 p-2"/>
                    <div className="flex flex-col">
                        <p className="text-black inter-font text-[16px]">GTR 5</p>
                        <p className="text-[#9F9F9F] inter-font font-normal text-[12px]">Gadget & Gear</p>
                    </div>
                </div>
                <div className="flex flex-col text-center">
                    <p className="text-[#525256] inter-font text-[16px] font-semibold">$160.00</p>
                    <p className="text-[#9F9F9F] inter-font text-[12px] font-normal">17 May 2023</p>
                </div>
            </div>
            {/* Polo shirt */}
            <div className=" flex justify-between border-b-2 border-[#F3F3F3] py-6 w-full">
                <div className="flex items-center">
                    <ShoppingBag className="bg-[#F3F3F3] text-gray-500 rounded-lg mr-4 w-10 h-10 p-2"/>
                    <div className="flex flex-col">
                        <p className="text-black inter-font text-[16px]">Polo Shirt</p>
                        <p className="text-[#9F9F9F] inter-font font-normal text-[12px]">XL fashions</p>
                    </div>
                </div>
                <div className="flex flex-col text-center">
                    <p className="text-[#525256] inter-font text-[16px] font-semibold">$20.00</p>
                    <p className="text-[#9F9F9F] inter-font text-[12px] font-normal">17 May 2023</p>
                </div>
            </div>
            {/* Biriyani */}
            <div className=" flex justify-between border-b-2 border-[#F3F3F3] py-6 w-full">
                <div className="flex items-center">
                    <UtensilsCrossed className="bg-[#F3F3F3] text-gray-500 rounded-lg mr-4 w-10 h-10 p-2"/>
                    <div className="flex flex-col">
                        <p className="text-black inter-font text-[16px]">Biriyani</p>
                        <p className="text-[#9F9F9F] inter-font font-normal text-[12px]">Hajir Biriyani</p>
                    </div>
                </div>
                <div className="flex flex-col text-center">
                    <p className="text-[#525256] inter-font text-[16px] font-semibold">$10.00</p>
                    <p className="text-[#9F9F9F] inter-font text-[12px] font-normal">17 May 2023</p>
                </div>
            </div>
            {/* Taxi Fare */}
            <div className=" flex justify-between border-b-2 border-[#F3F3F3] py-6 w-full">
                <div className="flex items-center">
                    <CarFront className="bg-[#F3F3F3] text-gray-500 rounded-lg mr-4 w-10 h-10 p-2"/>
                    <div className="flex flex-col">
                        <p className="text-black inter-font text-[16px]">Taxi Fare</p>
                        <p className="text-[#9F9F9F] inter-font font-normal text-[12px]">Uber</p>
                    </div>
                </div>
                <div className="flex flex-col text-center">
                    <p className="text-[#525256] inter-font text-[16px] font-semibold">$12.00</p>
                    <p className="text-[#9F9F9F] inter-font text-[12px] font-normal">17 May 2023</p>
                </div>
            </div>
            {/* Keyboard */}
            <div className=" flex justify-between border-b-2 border-[#F3F3F3] py-6 w-full">
                <div className="flex items-center">
                    <ShoppingBag className="bg-[#F3F3F3] text-gray-500 rounded-lg mr-4 w-10 h-10 p-2"/>
                    <div className="flex flex-col">
                        <p className="text-black inter-font text-[16px]">Keyboard</p>
                        <p className="text-[#9F9F9F] inter-font font-normal text-[12px]">Keyboard</p>
                    </div>
                </div>
                <div className="flex flex-col text-center">
                    <p className="text-[#525256] inter-font text-[16px] font-semibold">$22.00</p>
                    <p className="text-[#9F9F9F] inter-font text-[12px] font-normal">17 May 2023</p>
                </div>
            </div>
            {/* Biriyani */}
            <div className=" flex justify-between border-b-2 border-[#F3F3F3] py-6 w-full">
                <div className="flex items-center">
                    <UtensilsCrossed className="bg-[#F3F3F3] text-gray-500 rounded-lg mr-4 w-10 h-10 p-2"/>
                    <div className="flex flex-col">
                        <p className="text-black inter-font text-[16px]">Biriyani</p>
                        <p className="text-[#9F9F9F] inter-font font-normal text-[12px]">Hajir Biriyani</p>
                    </div>
                </div>
                <div className="flex flex-col text-center">
                    <p className="text-[#525256] inter-font text-[16px] font-semibold">$10.00</p>
                    <p className="text-[#9F9F9F] inter-font text-[12px] font-normal">17 May 2023</p>
                </div>
            </div>
            {/* Taxi Fare */}
            <div className=" flex justify-between border-b-2 border-[#F3F3F3] py-6 w-full">
                <div className="flex items-center">
                    <CarFront className="bg-[#F3F3F3] text-gray-500 rounded-lg mr-4 w-10 h-10 p-2"/>
                    <div className="flex flex-col">
                        <p className="text-black inter-font text-[16px]">Taxi Fare</p>
                        <p className="text-[#9F9F9F] inter-font font-normal text-[12px]">Uber</p>
                    </div>
                </div>
                <div className="flex flex-col text-center">
                    <p className="text-[#525256] inter-font text-[16px] font-semibold">$12.00</p>
                    <p className="text-[#9F9F9F] inter-font text-[12px] font-normal">17 May 2023</p>
                </div>
            </div>
            {/* Keyboard */}
            <div className=" flex justify-between py-6 w-full">
                <div className="flex items-center">
                    <ShoppingBag className="bg-[#F3F3F3] text-gray-500 rounded-lg mr-4 w-10 h-10 p-2"/>
                    <div className="flex flex-col">
                        <p className="text-black inter-font text-[16px]">Keyboard</p>
                        <p className="text-[#9F9F9F] inter-font font-normal text-[12px]">Keyboard</p>
                    </div>
                </div>
                <div className="flex flex-col text-center">
                    <p className="text-[#525256] inter-font text-[16px] font-semibold">$22.00</p>
                    <p className="text-[#9F9F9F] inter-font text-[12px] font-normal">17 May 2023</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}
