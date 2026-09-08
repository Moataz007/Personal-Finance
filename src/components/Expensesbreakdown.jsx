import { ArrowDown, ArrowRight, ArrowUp, Building2, CarFront, Clapperboard, ShoppingBag, UtensilsCrossed } from "lucide-react";



export default function Expensesbreakdown() {
  return (
    <>
    <div>
        <div className="flex items-center inter-font font-normal text-[27px] text-[#878787] justify-between">
            <p>Expenses Breakdown</p>
            <p className="text-[12px]">*Compare to last month</p>
        </div>
        <div className="py-5 px-6 bg-white flex justify-center rounded-lg">
            {/* parent first section*/}
            <div className="flex flex-col border-r-2 border-[#D1D1D1] py-5 w-full">
                {/* child 1 */}
                <div className="flex items-center mb-6 px-4 py-2 border-b-2 border-[#D1D1D1]">
                    <div>
                        <Building2 className="bg-[#F3F3F3] text-gray-500 rounded-lg mr-4 w-10 h-14 px-2 py4"/>
                    </div>
                    <div className="mr-2">
                        <div className="inter-font font-medium text-[#878787] text-[12px]">Housing</div>
                        <div className="inter-font font-bold text-black text-[16px]">$250.00</div>
                        <div className="flex items-center">
                            <div className="inter-font font-medium text-[#9F9F9F] text-[12px] mr-2">15%*</div>
                            <ArrowUp className="text-[#E73D1C] w-4"/>
                        </div>

                    </div>
                    <ArrowRight className="text-[#9F9F9F]"/>
                </div>
                {/* child 2 */}
                <div className="flex items-center px-4 py-2">
                    <div>
                        <Clapperboard className="bg-[#F3F3F3] text-gray-500 rounded-lg mr-4 w-10 h-14 px-2 py4"/>
                    </div>
                    <div className="mr-2">
                        <div className="inter-font font-medium text-[#878787] text-[12px]">Entertainment</div>
                        <div className="inter-font font-bold text-black text-[16px]">$80.00</div>
                        <div className="flex items-center">
                            <div className="inter-font font-medium text-[#9F9F9F] text-[12px] mr-2">15%*</div>
                            <ArrowDown className="text-green-600 w-4"/>
                        </div>

                    </div>
                    <ArrowRight className="text-[#9F9F9F]"/>
                </div>
            </div>
            {/* parent second section*/}
            <div className="flex flex-col border-r-2 border-[#D1D1D1] py-5 w-full">
                {/* child 1 */}
                <div className="flex items-center mb-6 px-4 py-2 border-b-2 border-[#D1D1D1]">
                    <div>
                        <UtensilsCrossed className="bg-[#F3F3F3] text-gray-500 rounded-lg mr-4 w-10 h-14 px-2 py4"/>
                    </div>
                    <div className="mr-2">
                        <div className="inter-font font-medium text-[#878787] text-[12px]">Food</div>
                        <div className="inter-font font-bold text-black text-[16px]">$350.00</div>
                        <div className="flex items-center">
                            <div className="inter-font font-medium text-[#9F9F9F] text-[12px] mr-2">08%*</div>
                            <ArrowDown className="text-green-600 w-4"/>
                        </div>

                    </div>
                    <ArrowRight className="text-[#9F9F9F]"/>
                </div>
                {/* child 2 */}
                <div className="flex items-center px-4 py-2 ">
                    <div>
                        <ShoppingBag className="bg-[#F3F3F3] text-gray-500 rounded-lg mr-4 w-10 h-14 px-2 py4"/>
                    </div>
                    <div className="mr-2">
                        <div className="inter-font font-medium text-[#878787] text-[12px]">Shopping</div>
                        <div className="inter-font font-bold text-black text-[16px]">$420.00</div>
                        <div className="flex items-center">
                            <div className="inter-font font-medium text-[#9F9F9F] text-[12px] mr-2">25%*</div>
                            <ArrowUp className="text-[#E73D1C] w-4"/>
                        </div>

                    </div>
                    <ArrowRight className="text-[#9F9F9F]"/>
                </div>
            </div>
            {/* parent third section*/}
            <div className="flex flex-col py-5 w-full">
                {/* child 1 */}
                <div className="flex items-center mb-6 px-4 py-2 border-b-2 border-[#D1D1D1]">
                    <div>
                        <CarFront className="bg-[#F3F3F3] text-gray-500 rounded-lg mr-4 w-10 h-14 px-2 py4"/>
                    </div>
                    <div className="mr-2">
                        <div className="inter-font font-medium text-[#878787] text-[12px]">Transportation</div>
                        <div className="inter-font font-bold text-black text-[16px]">$50.00</div>
                        <div className="flex items-center">
                            <div className="inter-font font-medium text-[#9F9F9F] text-[12px] mr-2">12%*</div>
                            <ArrowDown className="text-green-600 w-4"/>
                        </div>

                    </div>
                    <ArrowRight className="text-[#9F9F9F]"/>
                </div>
                {/* child 2 */}
                <div className="flex items-center px-4 py-2">
                    <div>
                        <Clapperboard className="bg-[#F3F3F3] text-gray-500 rounded-lg mr-4 w-10 h-14 px-2 py4"/>
                    </div>
                    <div className="mr-2">
                        <div className="inter-font font-medium text-[#878787] text-[12px]">Others</div>
                        <div className="inter-font font-bold text-black text-[16px]">$650.00</div>
                        <div className="flex items-center">
                            <div className="inter-font font-medium text-[#9F9F9F] text-[12px] mr-2">23%*</div>
                            <ArrowUp className="text-[#E73D1C] w-4"/>
                        </div>

                    </div>
                    <ArrowRight className="text-[#9F9F9F]"/>
                </div>
            </div>
            
        </div>
    </div>
    
    </>
  )
}
