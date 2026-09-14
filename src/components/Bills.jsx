import Billcard from "./Billcard";
import Navbar2 from "./Navbar2";
import Slidenav from "./Slidenav";


export default function Bills() {
  return (
    <>
        <div className="flex bg-[#E8E8E8] dark:bg-[#1d232a] ">
                        <Slidenav/>
                        <div className="w-full">
                        <Navbar2 />
                        <Billcard/>
                        </div>
                </div>  
    
    </>
  )
}
