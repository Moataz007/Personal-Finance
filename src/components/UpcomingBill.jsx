import { ChevronRight } from "lucide-react";
import { BiLogoAdobe } from "react-icons/bi";

export default function UpcomingBill() {
  return (
    <>
        <div className="w-full">
            <div className="flex justify-between">
              <p className="inter-font font-normal text-[27px] text-[#878787] ">Upcoming Bill</p>
              <div className="flex items-center text-[#878787] gap-x-1">
                <p className="inter-font font-normal text-[27px] ">View All</p>
                <ChevronRight/>
              </div>
            </div>
            <div className="bg-white w-full py-5 px-6 rounded-lg">
              <div className="flex justify-between border-b border-[#F3F3F3] pb-3 items-center inter-font">
                {/* date */}
                <div className="flex flex-col bg-[#D2D2D240] inter-font p-4 rounded-lg">
                  <p className="text-[#666666] font-medium text-[12px]">May</p>
                  <p className="font-extrabold text-[22px]">15</p>
                </div>
                {/*details*/}
                <div>
                  <p className="text-[#666666] font-medium text-[19px]">Figma</p>
                  <p className="font-bold text-[22px] text-[#525256]">Figma - Monthly</p>
                  <p className="text-[#9F9F9F] font-medium text-[19px]">Last Charge - 14 May, 2022</p>
                </div>
                {/* price */}
                <div className="border-[#E8E8E8] border-2 rounded-lg px-2 py-3 h-fit">
                  <p className="text-[#525256] font-bold text-[16px]">$150</p>
                </div>
              </div>
              <div className="flex justify-between pt-3 items-center inter-font">
                {/* date */}
                <div className="flex flex-col bg-[#D2D2D240] inter-font p-4 rounded-lg">
                  <p className="text-[#666666] font-medium text-[12px]">Jun</p>
                  <p className="font-extrabold text-[22px]">16</p>
                </div>
                {/*details*/}
                <div>
                  <div className="flex items-center">
                    <BiLogoAdobe size={25} className="text-[#E73D1C]" />
                  <p className="text-[#E73D1C] font-medium text-[19px]">Adobe</p>
                  </div>
                  <p className="font-bold text-[22px] text-[#525256]">Adobe - Yearly</p>
                  <p className="text-[#9F9F9F] font-medium text-[19px]">Last Charge - 17 Jun, 2023</p>
                </div>
                {/* price */}
                <div className="border-[#E8E8E8] border-2 rounded-lg px-2 py-3 h-fit">
                  <p className="text-[#525256] font-bold text-[16px]">$559</p>
                </div>
              </div>
            </div>
          </div>
    
    </>
  )
}
