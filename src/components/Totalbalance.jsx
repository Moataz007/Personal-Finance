import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";


export default function Totalbalance() {
  return (
    <>
      <div className="w-full">
        <p className="inter-font font-normal text-[27px] text-[#878787] ">
          Total Balance
        </p>
        <div className="bg-white w-full py-5 px-6 rounded-lg">
          <div className="flex justify-between border-b border-[#F3F3F3] pb-3">
            <p className="inter-font font-extrabold text-[22px] text-[#191919] size-8">
              $240,399
            </p>
            <p className="inter-font font-medium text-[14px] text-[#525256]">
              All Accounts
            </p>
          </div>
          {/* credit card */}
          <div className="flex bg-[#299D91] rounded-lg p-4 justify-between mt-3">
            <div>
              <p className="inter-font font-medium text-[14px] text-[#FFFFFFB2]">Account type</p>
              <p className="inter-font font-bold text-[16px] text-white">Credit Card</p>
              <p className="inter-font font-medium text-[14px] text-[#FFFFFFB2]">**** **** **** 2598</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="relative w-10 h-6 mb-4">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-yellow-400"></div>
                <div className="absolute right-0 top-0 w-6 h-6 rounded-full bg-red-500"></div>
              </div>
              <button className="flex gap-x-3">
              <p className="inter-font font-bold text-[16px] text-white">$25000</p>
              <ArrowUpRight className="bg-white text-[#299D91] rounded-2xl gap-2 p-1" />
              </button>
            </div>
          </div>
          {/* next and previous */}
          <div className="mt-5 flex justify-between items-center">
            <div className="text-[#D1D1D1] flex gap-1">
              <button>
              <ChevronLeft/>
              </button>
              <p>Previous</p>
            </div>
            <div className="flex gap-1.5">
              <div className="rounded-full bg-[#299D91] w-2 h-2"></div>
              <div className="rounded-full bg-[#D1D1D1] w-2 h-2"></div>
              <div className="rounded-full bg-[#D1D1D1] w-2 h-2"></div>
            </div>
            <div className=" flex gap-1">
              <p>Next</p>
              <button>
              <ChevronRight/>
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
