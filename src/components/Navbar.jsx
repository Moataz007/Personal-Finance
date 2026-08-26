import { BellDot, ChevronsRight, Search } from "lucide-react";

export default function Navbar() {
  return (
    <>
        <header className="py-6 inter-font flex items-start justify-between ml-6 mr-8 mb-4">
          <div className="flex items-center text-[#9F9F9F] ">
            <p className="text-[#191919] dark:text-white font-bold text-[28px]">
              Hello Tanzir
            </p>
            <ChevronsRight className="mt-1.5 ml-6 "/>
            <p className="mt-1.5 ml-0.5">May 19, 2023</p>
          </div>
          <div className="flex items-center gap-2.5 mt-1.5">
            <BellDot className="mr-10 text-[#666666] dark:text-[#617080] "/>
            {/* search bar */}
            <div className="flex h-12 bg-white dark:bg-[#33404e] rounded-xl shadow-2xl">
            <input type="text" placeholder="search here" className=" px-8"/>
            <Search className="absolute right-13 top-10 "/>
            </div>
          </div>
        </header>
    
    </>
  )
}
