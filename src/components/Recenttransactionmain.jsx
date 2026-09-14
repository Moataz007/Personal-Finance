import { CarFront, Clapperboard, Gamepad2, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Recenttransactionmain() {
  return (
    <>
      <p className="inter-font font-normal text-[22px] text-[#878787] mb-4">Recent Transaction</p>
        <div className="flex gap-7 mb-4.5 inter-font font-bold text-[16px] text-[#525256] dark:text-gray-100">
          <NavLink className={({isActive}) => `${
            isActive
            ? "border-b-2 border-[#299D91] pb-2"
            : "text-[#299D91]"
          }`
            }>All</NavLink>

          <NavLink>Revenue</NavLink>

          <NavLink>Expenses</NavLink>
        </div>
      <div className="table-fixed text-center pt-8 pl-8 pr-8 pb-10 font-normal text-[16px] text-[#9F9F9F] bg-white rounded-lg mr-6">
        <div className=" max-h-200 overflow-y-auto">
              <table className="table-fixed text-center w-full mb-8">
                  <thead>
                      <tr className="font-bold text-[16px] text-[#191919] border-b border-[#D2D2D240]">
                          <th className="pb-4 pt-4">Items</th>
                          <th className="pb-4 pt-4">Shop name</th>
                          <th className="pb-4 pt-4">Date</th>
                          <th className="pb-4 pt-4">Payment Method</th>
                          <th className="pb-4 pt-4">Amount</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                          <td className="pt-4 pb-4 font-semibold text-[#191919]">
                            <div className="flex items-center justify-center">
                              <Gamepad2 className="text-[#525256] rounded-lg m-2"/>
                              <p>GTR</p>
                            </div>
                          </td>
                          <td>Gadget & Gear</td>
                          <td>17 May, 2023</td>
                          <td>Credit Card</td>
                          <td className="font-semibold text-[#191919]">$160.00</td>
                      </tr>
                      <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                          <td className="pt-4 pb-4 font-semibold text-[#191919]">
                            <div className="flex items-center justify-center">
                              <ShoppingBag className="text-[#525256] rounded-lg m-2"/>
                              <p>Polo shirt</p>
                            </div>
                          </td>
                          <td>XL fashions</td>
                          <td>17 May, 2023</td>
                          <td>Credit Card</td>
                          <td className="font-semibold text-[#191919]">$20.00</td>
                      </tr>
                      <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                          <td className="pt-4 pb-4 font-semibold text-[#191919]">
                            <div className="flex items-center justify-center">
                              <UtensilsCrossed className="text-[#525256] rounded-lg m-2"/>
                              <p>Biriyani</p>
                            </div>
                          </td>
                          <td>Hajir Biriyani</td>
                          <td>17 May, 2023</td>
                          <td>Credit Card</td>
                          <td className="font-semibold text-[#191919]">$12.00</td>
                      </tr>
                      <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                          <td className="pt-4 pb-4 font-semibold text-[#191919]">
                            <div className="flex items-center justify-center">
                              <Clapperboard className="text-[#525256] rounded-lg m-2"/>
                              <p>Movie ticket</p>
                            </div>
                          </td>
                          <td>Inox</td>
                          <td>17 May, 2023</td>
                          <td>Credit Card</td>
                          <td className="font-semibold text-[#191919]">$15.00</td>
                      </tr>
                      <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                          <td className="pt-4 pb-4 font-semibold text-[#191919]">
                            <div className="flex items-center justify-center">
                              <CarFront className="text-[#525256] rounded-lg m-2"/>
                              <p>Taxi fare</p>
                            </div>
                          </td>
                          <td>Uber</td>
                          <td>17 May, 2023</td>
                          <td>Credit Card</td>
                          <td className="font-semibold text-[#191919]">$10.00</td>
                      </tr>
                      <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                          <td className="pt-4 pb-4 font-semibold text-[#191919]">
                            <div className="flex items-center justify-center">
                              <UtensilsCrossed className="text-[#525256] rounded-lg m-2"/>
                              <p>Pizza</p>
                            </div>
                          </td>
                          <td>Pizza Hit</td>
                          <td>17 May, 2023</td>
                          <td>Credit Card</td>
                          <td className="font-semibold text-[#191919]">$20.00</td>
                      </tr>
                      <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                          <td className="pt-4 pb-4 font-semibold text-[#191919]">
                            <div className="flex items-center justify-center">
                              <ShoppingBag className="text-[#525256] rounded-lg m-2"/>
                              <p>Keyboard</p>
                            </div>
                          </td>
                          <td>Gadget & Gear</td>
                          <td>17 May, 2023</td>
                          <td>Credit Card</td>
                          <td className="font-semibold text-[#191919]">$30.00</td>
                      </tr>
                      <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                          <td className="pt-4 pb-4 font-semibold text-[#191919]">
                            <div className="flex items-center justify-center">
                              <Gamepad2 className="text-[#525256] rounded-lg m-2"/>
                              <p>GTR</p>
                            </div>
                          </td>
                          <td>Gadget & Gear</td>
                          <td>17 May, 2023</td>
                          <td>Credit Card</td>
                          <td className="font-semibold text-[#191919]">$160.00</td>
                      </tr>
                      <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                          <td className="pt-4 pb-4 font-semibold text-[#191919]">
                            <div className="flex items-center justify-center">
                              <ShoppingBag className="text-[#525256] rounded-lg m-2"/>
                              <p>Polo shirt</p>
                            </div>
                          </td>
                          <td>XL fashions</td>
                          <td>17 May, 2023</td>
                          <td>Credit Card</td>
                          <td className="font-semibold text-[#191919]">$20.00</td>
                      </tr>
                      <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                          <td className="pt-4 pb-4 font-semibold text-[#191919]">
                            <div className="flex items-center justify-center">
                              <UtensilsCrossed className="text-[#525256] rounded-lg m-2"/>
                              <p>Biriyani</p>
                            </div>
                          </td>
                          <td>Hajir Biriyani</td>
                          <td>17 May, 2023</td>
                          <td>Credit Card</td>
                          <td className="font-semibold text-[#191919]">$12.00</td>
                      </tr>
                      <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                          <td className="pt-4 pb-4 font-semibold text-[#191919]">
                            <div className="flex items-center justify-center">
                              <Clapperboard className="text-[#525256] rounded-lg m-2"/>
                              <p>Movie ticket</p>
                            </div>
                          </td>
                          <td>Inox</td>
                          <td>17 May, 2023</td>
                          <td>Credit Card</td>
                          <td className="font-semibold text-[#191919]">$15.00</td>
                      </tr>
                      <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                          <td className="pt-4 pb-4 font-semibold text-[#191919]">
                            <div className="flex items-center justify-center">
                              <CarFront className="text-[#525256] rounded-lg m-2"/>
                              <p>Taxi fare</p>
                            </div>
                          </td>
                          <td>Uber</td>
                          <td>17 May, 2023</td>
                          <td>Credit Card</td>
                          <td className="font-semibold text-[#191919]">$10.00</td>
                      </tr>
                      <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                          <td className="pt-4 pb-4 font-semibold text-[#191919]">
                            <div className="flex items-center justify-center">
                              <UtensilsCrossed className="text-[#525256] rounded-lg m-2"/>
                              <p>Pizza</p>
                            </div>
                          </td>
                          <td>Pizza Hit</td>
                          <td>17 May, 2023</td>
                          <td>Credit Card</td>
                          <td className="font-semibold text-[#191919]">$20.00</td>
                      </tr>
                      <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                          <td className="pt-4 pb-4 font-semibold text-[#191919]">
                            <div className="flex items-center justify-center">
                              <ShoppingBag className="text-[#525256] rounded-lg m-2"/>
                              <p>Keyboard</p>
                            </div>
                          </td>
                          <td>Gadget & Gear</td>
                          <td>17 May, 2023</td>
                          <td>Credit Card</td>
                          <td className="font-semibold text-[#191919]">$30.00</td>
                      </tr>
                      
                  </tbody>
                  
              </table>
        </div>
              </div>
    </>
  )
}
