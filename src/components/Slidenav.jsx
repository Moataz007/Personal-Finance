import { Link } from "react-router-dom";
import "../style/home.css";
import {
  ArrowLeftRight,
  EllipsisVertical,
  Goal,
  HandCoins,
  LayoutGrid,
  LogIn,
  Receipt,
  Settings,
  Wallet,
} from "lucide-react";

export default function Slidenav() {
  return (
    <>
      <aside className="flex flex-col bg-[#191919] dark:ml-3 mr-6 mb-3 mt-3 py-12 px-7 w-fit">
        {/* menu componant */}
        <div className="flex flex-col justify-center text-[#FFFFFFB2]">
          <p className="big-word text-[40px] tracking-[8%] text-white font-extrabold pb-10">
            FINE
            <span className="small-word font-medium text-[40px] tracking-[8%]">
              bank.
            </span>
            IO
          </p>
          <div className="flex gap-3 bg-[#299D91] h-full mb-4 py-3">
            <LayoutGrid />
            <p className="small-word text-white">Overview</p>
          </div>
          <div className="flex gap-3 h-full mb-4 py-3">
            <Wallet />
            <p className="small-word">Transactions</p>
          </div>
          <div className="flex gap-3 h-full mb-4 py-3">
            <ArrowLeftRight />
            <p className="small-word pb-4">Balances</p>
          </div>
          <div className="flex gap-3 h-full mb-4 py-3">
            <Receipt />
            <p className="small-word pb-4">Bills</p>
          </div>
          <div className="flex gap-3 h-full mb-4 py-3">
            <HandCoins />
            <p className="small-word pb-4">Expenses</p>
          </div>
          <div className="flex gap-3 h-full mb-4 py-3">
            <Goal />
            <p className="small-word pb-4">Goals</p>
          </div>
          <div className="flex gap-3 h-full mb-4 py-3">
            <Settings />
            <p className="small-word pb-4">Settings</p>
          </div>
        </div>
        {/* logout and Avatar */}
        <div className="lg:mt-57 md:mt-36 ">
        <Link to="/login" className="flex gap-3 py-3 pl-3 mb-11 bg-white-8 opacity-75 ">
          <LogIn className="text-white"/>
          <p className="small-word text-white">Logout</p>
        </Link>
        <div className="flex items-center gap-3 py-8">
          {/* PHOTO */}
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="/avatar.jpg" />
          </div>
        </div>
        {/* TEXT UNDER PHOTO */}
        <div className="pr-3">
          <p className="text-white font-semibold">Tanzir Rahman</p>
          <p className="text-white/70 font-normal">View profile</p>
        </div>
        <EllipsisVertical className="text-white"/>
        </div>
        </div>

      </aside>
    </>
  );
}
