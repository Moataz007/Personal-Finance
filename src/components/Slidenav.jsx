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
      <aside className="flex flex-col bg-[#191919] dark:ml-3 mr-6 mb-3 mt-3 py-12 px-7 w-fit sm:hidden lg:block">
        {/* menu componant */}
        <div className="flex flex-col justify-center text-[#FFFFFFB2]">
          <p className="big-word text-[40px] tracking-[8%] text-white font-extrabold pb-10">
            FINE
            <span className="small-word font-medium text-[40px] tracking-[8%]">
              bank.
            </span>
            IO
          </p>
          {/* Overview */}
          <button>
            <Link to="/Home" className="flex gap-3 bg-[#299D91] h-full mb-4 py-3 cursor-pointer">
            <LayoutGrid />
            <p className="small-word text-white">Overview</p>
            </Link>
          </button>
          {/* Transactions */}
          <button>
          <Link to="/Transactions" className="flex gap-3 h-full mb-4 py-3 cursor-pointer">
            <Wallet />
            <p className="small-word">Transactions</p>
          </Link>
          </button>
          {/* Balances */}
          <button className="flex gap-3 h-full mb-4 py-3 cursor-pointer">
            <ArrowLeftRight />
            <p className="small-word pb-4">Balances</p>
          </button>
          {/* Bills */}
          <button className="flex gap-3 h-full mb-4 py-3 cursor-pointer">
            <Receipt />
            <p className="small-word pb-4">Bills</p>
          </button>
          {/* Expenses */}
          <button className="flex gap-3 h-full mb-4 py-3 cursor-pointer">
            <HandCoins />
            <p className="small-word pb-4">Expenses</p>
          </button>
          {/* Goals */}
          <button className="flex gap-3 h-full mb-4 py-3 cursor-pointer">
            <Goal />
            <p className="small-word pb-4">Goals</p>
          </button>
          {/* Settings */}
          <button className="flex gap-3 h-full mb-4 py-3 cursor-pointer">
            <Settings />
            <p className="small-word pb-4">Settings</p>
          </button>
        </div>
        {/* logout and Avatar */}
        <div className="lg:mt-57 md:mt-36 ">
        <Link to="/login" className="flex gap-3 py-3 pl-3 mb-11 bg-white-8 opacity-75 ">
          <LogIn className="text-white"/>
          <p className="small-word text-white">Logout</p>
        </Link>
        <div className="flex items-center gap-3 py-8">
          {/* PHOTO */}
        <button className="avatar cursor-pointer">
          <div className="w-24 rounded-full">
            <img src="/avatar.jpg" />
          </div>
        </button>
        {/* TEXT UNDER PHOTO */}
        <div className="pr-3">
          <button className="text-white font-semibold cursor-pointer">Tanzir Rahman</button>
          <button className="text-white/70 font-normal cursor-pointer">View profile</button>
        </div>
        {/* 3 dots */}
        <button className="cursor-pointer">
        <EllipsisVertical className="text-white"/>
        </button>
        </div>
        </div>
      </aside>
    </>
  );
}
