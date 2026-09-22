import { Link, NavLink } from "react-router-dom";
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
            <NavLink to="/Home"
             className={({ isActive }) =>
            `flex gap-3 hover:bg-[#299D91] h-full mb-4 py-3 cursor-pointer ${
            isActive
             ? "bg-[#299D91] text-white"
             : "text-[#FFFFFFB2]"
            }`
            }>
            <LayoutGrid />
            <p className="small-word">Overview</p>
            </NavLink>
          </button>
          {/* Balances */}
          <button>
            <NavLink to="/Balances" className={({ isActive }) =>
            `flex gap-3 hover:bg-[#299D91] h-full mb-4 py-3 cursor-pointer ${
            isActive
             ? "bg-[#299D91] text-white"
             : "text-[#FFFFFFB2]"
            }`
            }>
            <ArrowLeftRight />
            <p className="small-word">Balances</p>
          </NavLink>
          </button>
          {/* Transactions */}
          <button>
          <NavLink to="/Transactions" className={({ isActive }) =>
            `flex gap-3 hover:bg-[#299D91] h-full mb-4 py-3 cursor-pointer ${
            isActive
             ? "bg-[#299D91] text-white"
             : "text-[#FFFFFFB2]"
            }`
            }>
            <Wallet />
            <p className="small-word">Transactions</p>
          </NavLink>
          </button>
          {/* Bills */}
          <button>
            <NavLink to="/Bills" className={({ isActive }) =>
            `flex gap-3 hover:bg-[#299D91] h-full mb-4 py-3 cursor-pointer ${
            isActive
             ? "bg-[#299D91] text-white"
             : "text-[#FFFFFFB2]"
            }`
            }>
            <Receipt />
            <p className="small-word">Bills</p>
          </NavLink>
          </button>
          {/* Expenses */}
          <button>
            <NavLink to="/Expenses" className={({ isActive }) =>
            `flex gap-3 hover:bg-[#299D91] h-full mb-4 py-3 cursor-pointer ${
            isActive
             ? "bg-[#299D91] text-white"
             : "text-[#FFFFFFB2]"
            }`
            }>
            <HandCoins />
            <p className="small-word active:text-white">Expenses</p>
          </NavLink>
          </button>
          {/* Goals */}
          <button>
            <NavLink to="/Goals" className={({ isActive }) =>
            `flex gap-3 hover:bg-[#299D91] h-full mb-4 py-3 cursor-pointer ${
            isActive
             ? "bg-[#299D91] text-white"
             : "text-[#FFFFFFB2]"
            }`
            }>
            <Goal />
            <p className="small-word active:text-white">Goals</p>
          </NavLink>
          </button>
          {/* Settings */}
          <button>
            <NavLink to="/Transactions" className={({ isActive }) =>
            `flex gap-3 hover:bg-[#299D91] h-full mb-4 py-3 cursor-pointer ${
            isActive
             ? "bg-[#299D91] text-white"
             : "text-[#FFFFFFB2]"
            }`
            }>
            <Settings />
            <p className="small-word active:text-white">Settings</p>
          </NavLink>
          </button>
        </div>
        {/* logout and Avatar */}
        <div className="lg:mt-57 md:mt-36 ">
        <Link to="/login" className="flex gap-3 active:bg-[#299D91] hover:bg-[#299D91] py-3 pl-3 mb-11 bg-white-8 opacity-75 ">
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
          <button className="text-white/70 font-normal hover:bg-gray-400 cursor-pointer">View profile</button>
        </div>
        {/* 3 dots */}
        <button className="cursor-pointer hover:bg-gray-400 rounded-full">
        <EllipsisVertical className="text-white"/>
        </button>
        </div>
        </div>
        
      </aside>
    </>
  );
}
