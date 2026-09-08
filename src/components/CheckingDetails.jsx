import CheckingAccountDetails from "./CheckingAccountDetails";
import Navbar2 from "./Navbar2";
import Slidenav from "./Slidenav";

export default function CheckingDetails() {
  return (
    <>
        <div className="flex bg-[#E8E8E8] dark:bg-[#1d232a] ">
                        <Slidenav/>
                        <div className="w-full">
                        <Navbar2 />
                        <CheckingAccountDetails/>
                        </div>
                </div>  
    </>
  )
}
