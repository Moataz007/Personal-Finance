import { PencilLine } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { PiMedalMilitaryLight } from "react-icons/pi";

export default function Goals() {
  return (
    <>
        <div className="w-full">
            <p className="inter-font font-normal text-[27px] text-[#878787] ">Goals</p>
            <div className="bg-white w-full py-5 px-6 rounded-lg">
              <div className="flex justify-between items-center border-b border-[#F3F3F3] pb-3 mb-5">
                <div className="flex gap-18">
                <p className="inter-font font-extrabold text-[22px] text-[#191919] size-8">$20,000</p>
                <button>
                  <PencilLine size={32} className="bg-[#D2D2D240] text-[#525256] rounded-sm p-1" />
                </button>
                </div>
                <p className="inter-font font-medium text-[14px] text-[#525256]">May, 2023</p>
              </div>
              <div className="flex justify-between">
                <div>
                  {/* target achieved */}
                  <div div className="flex gap-1 inter-font mb-6">
                    <PiMedalMilitaryLight className="mt-0.75 " />
                    <div>
                    <p className="font-normal text-[15px] pb-1.5 text-[#878787]">Target Achieved</p>
                    <p className="font-bold text-[19px]">$12,500</p>
                    </div>
                  </div>
                  {/* this month target */}
                  <div div className="flex gap-1 inter-font">
                    <GoGoal className="mt-0.75"/>
                    <div>
                    <p className="font-normal text-[15px] pb-1.5 text-[#878787]">This month Target</p>
                    <p className="font-bold text-[19px]">$20,000</p>
                    </div>
                  </div>
                </div>
                
                <div div className="flex flex-col items-center gap-1 inter-font ">
                  <PiMedalMilitaryLight />
                  <p className="font-normal text-[12px] text-[#878787]">Target Achieved</p>
                  <p className="font-bold text-[16px]">$12,500</p>
                </div>
              </div>
            </div>
          </div>
    
    </>
  )
}
