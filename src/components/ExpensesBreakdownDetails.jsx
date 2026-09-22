import { ArrowDown, ArrowUp, CarFront, Clapperboard, House, LayoutGrid, ShoppingBag, UtensilsCrossed } from "lucide-react";

export default function ExpensesBreakdownDetails() {
  return (
    <>
      <p className="inter-font font-normal text-[27px] text-[#878787] ">Expenses Breakdown</p>
      {/* Cards */}
      <div className="mt-4 mb-5 text-black gap-6 grid grid-cols-3 pr-6">
        {/* Houseing Card */}
        <div className="inter-font bg-white rounded-lg">
          {/* first section */}
          <div className="bg-[#E8E8E8] py-4 px-6 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center">
            <House className="bg-[#D1D1D1] text-[#525256] p-1 rounded-sm w-8 h-9"/>
            <div className="ml-4">
              <p className="text-[#666666] font-medium text-[16px]">Houseing</p>
              <p className="text-black font-extrabold text-[18px]">$250.00</p>

            </div>
            </div>
            <div className="ml-4">
              <div className="flex">
                <p className="text-[#666666] font-medium text-[16px]">15%</p>
                <ArrowUp className="text-red-700"/>
              </div>
              <p className="text-[#666666] font-light text-[12px]">Compare to last month</p>
            </div>
          </div>
          {/* second section */}
          <div className=" px-6">
            <div className="flex items-center justify-between py-6.5 border-b border-[#9F9F9F]">
              <p className="font-semibold text-[16px] text-[#525256]">House Rent</p>
              <div>
                <p className="font-semibold text-[16px] text-[#525256]">$230.00</p>
                <p className="font-normal text-[12px] text-[#9F9F9F]">17 May 2023</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-6.5">
              <p className="font-semibold text-[16px] text-[#525256]">Parking</p>
              <div>
                <p className="font-semibold text-[16px] text-[#525256]">$20.00</p>
                <p className="font-normal text-[12px] text-[#9F9F9F]">17 May 2023</p>
              </div>
            </div>
          </div>
        </div>
        {/* Food Card */}
        <div className="inter-font bg-white rounded-lg">
          {/* first section */}
          <div className="bg-[#E8E8E8] py-4 px-6 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center">
            <UtensilsCrossed className="bg-[#D1D1D1] text-[#525256] p-1 rounded-sm w-8 h-9"/>
            <div className="ml-4">
              <p className="text-[#666666] font-medium text-[16px]">Food</p>
              <p className="text-black font-extrabold text-[18px]">$350.00</p>

            </div>
            </div>
            <div className="ml-4">
              <div className="flex">
                <p className="text-[#666666] font-medium text-[16px]">0.8%</p>
                <ArrowDown className="text-green-600"/>
              </div>
              <p className="text-[#666666] font-light text-[12px]">Compare to last month</p>
            </div>
          </div>
          {/* second section */}
          <div className=" px-6">
            <div className="flex items-center justify-between py-6.5 border-b border-[#9F9F9F]">
              <p className="font-semibold text-[16px] text-[#525256]">Grocery</p>
              <div>
                <p className="font-semibold text-[16px] text-[#525256]">$230.00</p>
                <p className="font-normal text-[12px] text-[#9F9F9F]">17 May 2023</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-6.5">
              <p className="font-semibold text-[16px] text-[#525256]">Restaurant bill</p>
              <div>
                <p className="font-semibold text-[16px] text-[#525256]">$120.00</p>
                <p className="font-normal text-[12px] text-[#9F9F9F]">17 May 2023</p>
              </div>
            </div>
          </div>
        </div>
        {/* Transportation Card */}
        <div className="inter-font bg-white rounded-lg">
          {/* first section */}
          <div className="bg-[#E8E8E8] py-4 px-6 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center">
            <CarFront className="bg-[#D1D1D1] text-[#525256] p-1 rounded-sm w-8 h-9"/>
            <div className="ml-4">
              <p className="text-[#666666] font-medium text-[16px]">Transportation</p>
              <p className="text-black font-extrabold text-[18px]">$50.00</p>

            </div>
            </div>
            <div className="ml-4">
              <div className="flex">
                <p className="text-[#666666] font-medium text-[16px]">12%</p>
                <ArrowDown className="text-green-600"/>
              </div>
              <p className="text-[#666666] font-light text-[12px]">Compare to last month</p>
            </div>
          </div>
          {/* second section */}
          <div className=" px-6">
            <div className="flex items-center justify-between py-6.5 border-b border-[#9F9F9F]">
              <p className="font-semibold text-[16px] text-[#525256]">Taxi Fare</p>
              <div>
                <p className="font-semibold text-[16px] text-[#525256]">$30.00</p>
                <p className="font-normal text-[12px] text-[#9F9F9F]">17 May 2023</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-6.5">
              <p className="font-semibold text-[16px] text-[#525256]">Metro Card bill</p>
              <div>
                <p className="font-semibold text-[16px] text-[#525256]">$20.00</p>
                <p className="font-normal text-[12px] text-[#9F9F9F]">17 May 2023</p>
              </div>
            </div>
          </div>
        </div>
        {/* Entertainment Card */}
        <div className="inter-font bg-white rounded-lg">
          {/* first section */}
          <div className="bg-[#E8E8E8] py-4 px-6 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center">
            <Clapperboard className="bg-[#D1D1D1] text-[#525256] p-1 rounded-sm w-8 h-9"/>
            <div className="ml-4">
              <p className="text-[#666666] font-medium text-[16px]">Entertainment</p>
              <p className="text-black font-extrabold text-[18px]">$80.00</p>

            </div>
            </div>
            <div className="ml-4">
              <div className="flex">
                <p className="text-[#666666] font-medium text-[16px]">15%</p>
                <ArrowDown className="text-green-600"/>
              </div>
              <p className="text-[#666666] font-light text-[12px]">Compare to last month</p>
            </div>
          </div>
          {/* second section */}
          <div className=" px-6">
            <div className="flex items-center justify-between py-6.5 border-b border-[#9F9F9F]">
              <p className="font-semibold text-[16px] text-[#525256]">Movie ticket</p>
              <div>
                <p className="font-semibold text-[16px] text-[#525256]">$30.00</p>
                <p className="font-normal text-[12px] text-[#9F9F9F]">17 May 2023</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-6.5">
              <p className="font-semibold text-[16px] text-[#525256]">iTunes</p>
              <div>
                <p className="font-semibold text-[16px] text-[#525256]">$50.00</p>
                <p className="font-normal text-[12px] text-[#9F9F9F]">17 May 2023</p>
              </div>
            </div>
          </div>
        </div>
        {/* Shopping Card */}
        <div className="inter-font bg-white rounded-lg">
          {/* first section */}
          <div className="bg-[#E8E8E8] py-4 px-6 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center">
            <ShoppingBag className="bg-[#D1D1D1] text-[#525256] p-1 rounded-sm w-8 h-9"/>
            <div className="ml-4">
              <p className="text-[#666666] font-medium text-[16px]">Shopping</p>
              <p className="text-black font-extrabold text-[18px]">$420.00</p>

            </div>
            </div>
            <div className="ml-4">
              <div className="flex">
                <p className="text-[#666666] font-medium text-[16px]">25%</p>
                <ArrowUp className="text-red-700"/>
              </div>
              <p className="text-[#666666] font-light text-[12px]">Compare to last month</p>
            </div>
          </div>
          {/* second section */}
          <div className=" px-6">
            <div className="flex items-center justify-between py-6.5 border-b border-[#9F9F9F]">
              <p className="font-semibold text-[16px] text-[#525256]">Shirt</p>
              <div>
                <p className="font-semibold text-[16px] text-[#525256]">$230.00</p>
                <p className="font-normal text-[12px] text-[#9F9F9F]">17 May 2023</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-6.5">
              <p className="font-semibold text-[16px] text-[#525256]">Jeans</p>
              <div>
                <p className="font-semibold text-[16px] text-[#525256]">$190.00</p>
                <p className="font-normal text-[12px] text-[#9F9F9F]">17 May 2023</p>
              </div>
            </div>
          </div>
        </div>
        {/* Others Card */}
        <div className="inter-font bg-white rounded-lg">
          {/* first section */}
          <div className="bg-[#E8E8E8] py-4 px-6 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center">
            <LayoutGrid className="bg-[#D1D1D1] text-[#525256] p-1 rounded-sm w-8 h-9"/>
            <div className="ml-4">
              <p className="text-[#666666] font-medium text-[16px]">Others</p>
              <p className="text-black font-extrabold text-[18px]">$50.00</p>

            </div>
            </div>
            <div className="ml-4">
              <div className="flex">
                <p className="text-[#666666] font-medium text-[16px]">23%</p>
                <ArrowUp className="text-red-700"/>
              </div>
              <p className="text-[#666666] font-light text-[12px]">Compare to last month</p>
            </div>
          </div>
          {/* second section */}
          <div className=" px-6">
            <div className="flex items-center justify-between py-6.5 border-b border-[#9F9F9F]">
              <p className="font-semibold text-[16px] text-[#525256]">Donation</p>
              <div>
                <p className="font-semibold text-[16px] text-[#525256]">$30.00</p>
                <p className="font-normal text-[12px] text-[#9F9F9F]">17 May 2023</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-6.5">
              <p className="font-semibold text-[16px] text-[#525256]">Gift</p>
              <div>
                <p className="font-semibold text-[16px] text-[#525256]">$20.00</p>
                <p className="font-normal text-[12px] text-[#9F9F9F]">17 May 2023</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    
    
    </>
  )
}
