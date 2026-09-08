import { ChevronRight } from "lucide-react";
import { FaCcVisa } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function CardsBalance() {
  return (
    <>
        <p className="inter-font font-normal text-[22px] text-[#878787] mb-4">Balances</p>
        <div className="grid grid-cols-3 inter-font gap-x-6 gap-y-8 flex-wrap mr-6">
            {/* Credit Card */}
            <div className="py-6 px-4 bg-white rounded-lg ">
                {/* redit Card and Logo */}
            <div className="flex items-center justify-between pb-4 text-[#666666] border-b border-b-[#D2D2D240] mb-4">
                <p className="text-[16px] font-bold">Credit Card</p>
                <div className="flex gap-1">
                    {/* Logo */}
                    <p className="text-[12px] font-medium">Master Card</p>
                    <div className="relative w-10 h-6 mb-4">
                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-yellow-400"></div>
                        <div className="absolute right-0 top-0 w-6 h-6 rounded-full bg-red-500"></div>
                    </div>
                </div>
            </div>
            {/* Information */}
            <div className="mb-6">
                {/* fist section account number */}
                <div className="mb-4">
                    <p className="text-[#191919] text-[20px] font-semibold">3388 4556  8860 8***</p>
                    <p className="text-[#9F9F9F] text-[14px] font-normal">Account Number</p>
                </div>
                {/* total amount */}
                <div className="mb-4">
                    <p className="text-[#191919] text-[20px] font-semibold">$25000</p>
                    <p className="text-[#9F9F9F] text-[14px] font-normal">Total amount</p>
                </div>
            </div>
            {/* actions */}
            <div className=" flex items-center justify-between">
                <button className="text-[#299D91] text-[16px] font-normal cursor-pointer">Remove</button>
                <button className="flex items-center bg-[#299D91] py-2 px-5 rounded-sm gap-2 cursor-pointer">
                    <p className="text-[14px] text-white font-medium">Details</p>
                    <ChevronRight color="#ffffff"/>
                </button>
            </div>
            </div>
            {/* Checking */}
            <div className="py-6 px-4 bg-white rounded-lg ">
                {/* redit Card and Logo */}
            <div className="flex items-center justify-between pb-4 text-[#666666] border-b border-b-[#D2D2D240] mb-4">
                <p className="text-[16px] font-bold">Checking</p>
                <div className="flex gap-1">
                    {/* Logo */}
                    <div className="flex items-center gap-1">
                        <p className="text-[12px] font-medium">AB Bank Ltd</p>
                        <FaCcVisa size={45} color="#1A1F71"/>
                    </div>
                </div>
            </div>
            {/* Information */}
            <div className="mb-6">
                {/* fist section account number */}
                <div className="mb-4">
                    <p className="text-[#191919] text-[20px] font-semibold">693 456  69 9****</p>
                    <p className="text-[#9F9F9F] text-[14px] font-normal">Account Number</p>
                </div>
                {/* total amount */}
                <div className="mb-4">
                    <p className="text-[#191919] text-[20px] font-semibold">$25000</p>
                    <p className="text-[#9F9F9F] text-[14px] font-normal">Total amount</p>
                </div>
            </div>
            {/* actions */}
            <div className=" flex items-center justify-between">
                <button className="text-[#299D91] text-[16px] font-normal cursor-pointer">Remove</button>
                <Link to="/CheckingAccountDetails" className="flex items-center bg-[#299D91] py-2 px-5 rounded-sm gap-2 cursor-pointer">
                    <p className="text-[14px] text-white font-medium">Details</p>
                    <ChevronRight color="#ffffff"/>
                </Link>
            </div>
            </div>
            {/* savings */}
            <div className="py-6 px-4 bg-white rounded-lg ">
                {/* redit Card and Logo */}
            <div className="flex items-center justify-between pb-4 text-[#666666] border-b border-b-[#D2D2D240] m-4">
                <p className="text-[16px] font-bold">savings</p>
                <div className="flex gap-1">
                    {/* Logo */}
                    <p className="text-[12px] font-medium">Brac Bank Ltd.</p>
                </div>
            </div>
            {/* Information */}
            <div className="mb-6">
                {/* fist section account number */}
                <div className="mb-4">
                    <p className="text-[#191919] text-[20px] font-semibold">133 456  886 8****</p>
                    <p className="text-[#9F9F9F] text-[14px] font-normal">Account Number</p>
                </div>
                {/* total amount */}
                <div className="mb-4">
                    <p className="text-[#191919] text-[20px] font-semibold">$25000</p>
                    <p className="text-[#9F9F9F] text-[14px] font-normal">Total amount</p>
                </div>
            </div>
            {/* actions */}
            <div className=" flex items-center justify-between mt-4">
                <button className="text-[#299D91] text-[16px] font-normal cursor-pointer">Remove</button>
                <button className="flex items-center bg-[#299D91] py-2 px-5 rounded-sm gap-2 cursor-pointer">
                    <p className="text-[14px] text-white font-medium">Details</p>
                    <ChevronRight color="#ffffff"/>
                </button>
            </div>
            </div>
            {/* Investment */}
            <div className="py-6 px-4 bg-white rounded-lg ">
                {/* redit Card and Logo */}
            <div className="flex items-center justify-between pb-4 text-[#666666] border-b border-b-[#D2D2D240] m-4">
                <p className="text-[16px] font-bold">Investment</p>
                <div className="flex gap-1">
                    {/* Logo */}
                    <p className="text-[12px] font-medium">Investment</p>
                </div>
            </div>
            {/* Information */}
            <div className="mb-6">
                {/* fist section account number */}
                <div className="mb-4">
                    <p className="text-[#191919] text-[20px] font-semibold">698 456  866 2****</p>
                    <p className="text-[#9F9F9F] text-[14px] font-normal">Account Number</p>
                </div>
                {/* total amount */}
                <div className="mb-4">
                    <p className="text-[#191919] text-[20px] font-semibold">$25000</p>
                    <p className="text-[#9F9F9F] text-[14px] font-normal">Total amount</p>
                </div>
            </div>
            {/* actions */}
            <div className=" flex items-center justify-between mt-4">
                <button className="text-[#299D91] text-[16px] font-normal cursor-pointer">Remove</button>
                <button className="flex items-center bg-[#299D91] py-2 px-5 rounded-sm gap-2 cursor-pointer">
                    <p className="text-[14px] text-white font-medium">Details</p>
                    <ChevronRight color="#ffffff"/>
                </button>
            </div>
            </div>
            {/* Loan */}
            <div className="py-6 px-4 bg-white rounded-lg ">
                {/* redit Card and Logo */}
            <div className="flex items-center justify-between pb-4 text-[#666666] border-b border-b-[#D2D2D240] m-4">
                <p className="text-[16px] font-bold">Loan</p>
                <div className="flex gap-1">
                    {/* Logo */}
                    <p className="text-[12px] font-medium">City Bank Ltd.</p>
                </div>
            </div>
            {/* Information */}
            <div className="mb-6">
                {/* fist section account number */}
                <div className="mb-4">
                    <p className="text-[#191919] text-[20px] font-semibold">363 456  896 6****</p>
                    <p className="text-[#9F9F9F] text-[14px] font-normal">Account Number</p>
                </div>
                {/* total amount */}
                <div className="mb-4">
                    <p className="text-[#191919] text-[20px] font-semibold">$25000</p>
                    <p className="text-[#9F9F9F] text-[14px] font-normal">Total amount</p>
                </div>
            </div>
            {/* actions */}
            <div className=" flex items-center justify-between mt-4 cursor-pointer">
                <button className="text-[#299D91] text-[16px] font-normal">Remove</button>
                <button className="flex items-center bg-[#299D91] py-2 px-5 rounded-sm gap-2">
                    <p className="text-[14px] text-white font-medium">Details</p>
                    <ChevronRight color="#ffffff"/>
                </button>
            </div>
            </div>
            {/* savings */}
            <div className=" flex flex-col items-center justify-center bg-white rounded-lg ">
                {/* redit Card and Logo */}
            <button className="text-white py-3 px-8 rounded-sm bg-[#299D91] cursor-pointer">
                <p>Add accounts</p>
            </button>
            <button className="py-3 px-8 text-[#9F9F9F] cursor-pointer">
                <p>Edit Accounts</p>
            </button>
            </div>
        </div>
    
    </>
  )
}
