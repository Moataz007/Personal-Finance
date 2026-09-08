import { Link } from "react-router-dom";
import Loadmore from "./Loadmore";


export default function CheckingAccountDetails() {
  return (
    <>
        <p className="inter-font font-normal text-[22px] text-[#878787] mb-4">Account Details</p>
        {/* Account Details */}
        <div className="grid grid-cols-3 pt-8 pl-8 pb-10 gap-10 font-normal text-[16px] text-[#9F9F9F] bg-white rounded-lg mr-6 mb-8">
            <div>
                <p>Bank Name</p>
                <p className="font-bold text-[18px] text-[#525256]">AB Bank Ltd.</p>
            </div>
            <div>
                <p>Account type</p>
                <p className="font-bold text-[18px] text-[#525256]">Checking</p>
            </div>
            <div>
                <p>Balance</p>
                <p className="font-bold text-[18px] text-[#525256]">$25,056.00</p>
            </div>
            <div>
                <p>Branch Name</p>
                <p className="font-bold text-[18px] text-[#525256]">park Street Branch</p>
            </div>
            <div>
                <p>Account Number</p>
                <p className="font-bold text-[18px] text-[#525256]">133 456  886 8****</p>
            </div>
            <div className="col-start-1 flex gap-8">
            <Link to="" className="bg-[#299D91] text-white text-[16px] rounded-sm px-3 py-3 font-bold">Edit Details</Link>
            <button className=" text-[#666666] text-[14px] font-semibold cursor-pointer">Remove</button>
            </div>
        </div>
        <p className="inter-font font-normal text-[22px] text-[#878787] mb-4">Transactions History</p>
        <div className="table-fixed text-center pt-8 pl-8 pr-8 pb-10 font-normal text-[16px] text-[#9F9F9F] bg-white rounded-lg mr-6">
        <table className="table-fixed text-center w-full mb-8">
            <thead>
                <tr className="font-bold text-[16px] text-[#191919] border-b border-[#D2D2D240]">
                    <th className="pr-12 pb-4 pt-4">Date</th>
                    <th className="pb-4 pt-4">status</th>
                    <th className="pb-4 pt-4">Transaction Type</th>
                    <th className="pb-4 pt-4">Receipt</th>
                    <th className="pb-4 pt-4">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                    <td className="pt-4 pb-4 font-normal text-[#525256]">17 Apr, 2023</td>
                    <td className="pt-4 pb-4">Complete</td>
                    <td className="pt-4 pb-4">Credit</td>
                    <td className="pt-4 pb-4">8C52d5DKDJ5</td>
                    <td className="pt-4 pb-4 font-semibold text-[#191919]">$160.00</td>
                </tr>
                <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                    <td className="pt-4 pb-4 font-normal text-[#525256]">17 Apr, 2023</td>
                    <td className="pt-4 pb-4">Complete</td>
                    <td className="pt-4 pb-4">Credit</td>
                    <td className="pt-4 pb-4">8C52d5DKDJ5</td>
                    <td className="pt-4 pb-4 font-semibold text-[#191919]">$160.00</td>
                </tr>
                <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                    <td className="pt-4 pb-4 font-normal text-[#525256]">17 Apr, 2023</td>
                    <td className="pt-4 pb-4">Complete</td>
                    <td className="pt-4 pb-4">Credit</td>
                    <td className="pt-4 pb-4">8C52d5DKDJ5</td>
                    <td className="pt-4 pb-4 font-semibold text-[#191919]">$160.00</td>
                </tr>
                <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                    <td className="pt-4 pb-4 font-normal text-[#525256]">17 Apr, 2023</td>
                    <td className="pt-4 pb-4">Complete</td>
                    <td className="pt-4 pb-4">Credit</td>
                    <td className="pt-4 pb-4">8C52d5DKDJ5</td>
                    <td className="pt-4 pb-4 font-semibold text-[#191919]">$160.00</td>
                </tr>
                <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                    <td className="pt-4 pb-4 font-normal text-[#525256]">17 Apr, 2023</td>
                    <td className="pt-4 pb-4">Complete</td>
                    <td className="pt-4 pb-4">Credit</td>
                    <td className="pt-4 pb-4">8C52d5DKDJ5</td>
                    <td className="pt-4 pb-4 font-semibold text-[#191919]">$160.00</td>
                </tr>
                <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                    <td className="pt-4 pb-4 font-normal text-[#525256]">17 Apr, 2023</td>
                    <td className="pt-4 pb-4">Complete</td>
                    <td className="pt-4 pb-4">Credit</td>
                    <td className="pt-4 pb-4">8C52d5DKDJ5</td>
                    <td className="pt-4 pb-4 font-semibold text-[#191919]">$160.00</td>
                </tr>
                <tr className="font-medium text-[16px] text-[#666666] border-b border-[#D2D2D240]">
                    <td className="pt-4 pb-4 font-normal text-[#525256]">17 Apr, 2023</td>
                    <td className="pt-4 pb-4">Complete</td>
                    <td className="pt-4 pb-4">Credit</td>
                    <td className="pt-4 pb-4">8C52d5DKDJ5</td>
                    <td className="pt-4 pb-4 font-semibold text-[#191919]">$160.00</td>
                </tr>
                <tr className="font-medium text-[16px] text-[#666666]">
                    <td className="pt-4 pb-4 font-normal text-[#525256]">17 Apr, 2023</td>
                    <td className="pt-4 pb-4">Complete</td>
                    <td className="pt-4 pb-4">Credit</td>
                    <td className="pt-4 pb-4">8C52d5DKDJ5</td>
                    <td className="pt-4 pb-4 font-semibold text-[#191919]">$160.00</td>
                </tr>
            </tbody>
            
        </table>
        <Loadmore/>
        </div>
    </>
  )
}
