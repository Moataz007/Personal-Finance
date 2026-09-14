import { ChevronRight } from "lucide-react";
import  figma from "../assets/images/Figma.png"
import  adobe from "../assets/images/Adobe.png"
export default function Billcard() {
  return (
    <>
        <div className="w-full px-6">
            <div className="flex justify-between mb-8">
              <p className="inter-font font-normal text-[27px] text-[#878787] ">Upcoming Bill</p>
              <div className="flex items-center text-[#878787] gap-x-1">
                <p className="inter-font font-normal text-[27px] ">View All</p>
                <ChevronRight/>
              </div>
            </div>
            <div className="bg-white w-full py-6 px-6 rounded-lg">
            <div className="flex items-center justify-between inter-font font-bold text-[16px] text-[#191919] pb-6">
                <p>Due Date</p>
                <p>Logo</p>
                <p>Item Description</p>
                <p>Last Charge</p>
                <p>Amount</p>
            </div>
              <div className="flex justify-between border-b border-[#F3F3F3] pb-3 items-center py-8">
                {/* date */}
                <div className="flex flex-col bg-[#D2D2D240] inter-font p-4 rounded-lg">
                  <p className="text-[#666666] font-medium text-[12px]">May</p>
                  <p className="font-extrabold text-[22px] text-black">15</p>
                </div>
                <div className="ml-30">
                <img src={figma} />
                </div>
                {/*details*/}
                <div className="flex flex-col items-start ml-18">
                  <p className="font-extrabold text-[18px] text-[#191919]">Figma - Yearly plan</p>
                  <p className="font-normal text-[14px] text-[#9F9F9F]">For advanced security and more flexible <br/> controls, the Professional plan helps you <br/> scale design processes company-wide.</p>
                </div>
                  <p className="text-[#9F9F9F] font-medium text-[19px]">Last Charge - 14 May, 2022</p>
                {/* price */}
                <div className="border-[#E8E8E8] border-2 rounded-lg px-2 py-3 h-fit">
                  <p className="text-[#525256] font-bold text-[16px]">$150</p>
                </div>
              </div>
              {/* ------------------------------ */}
              {/* second proccess */}
              <div className="flex justify-between pt-3 items-center inter-font">
                {/* date */}
                <div className="flex flex-col bg-[#D2D2D240] inter-font p-4 rounded-lg">
                  <p className="text-[#666666] font-medium text-[12px]">Jun</p>
                  <p className="font-extrabold text-[22px] text-black">16</p>
                </div>
                <div className="ml-30">
                <img className="ml-5" src={adobe} />
                </div>
                {/*details*/}
                <div className="flex flex-col items-start ml-21">
                  <p className="font-extrabold text-[18px] text-[#191919]">Figma - Yearly plan</p>
                  <p className="font-normal text-[14px] text-[#9F9F9F]">For advanced security and more flexible <br/> controls, the Professional plan helps you <br/> scale design processes company-wide.</p>
                </div>
                    <p className="text-[#9F9F9F] font-medium text-[19px]">Last Charge - 14 May, 2022</p>

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
