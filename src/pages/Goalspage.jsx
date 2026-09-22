import Navbar2 from "../components/Navbar2";
import Slidenav from "../components/Slidenav";
import Wavestatics from "../components/Wavestatics";

export default function Goalspage() {
  return (
    <>
    <div className="flex bg-[#E8E8E8] dark:bg-[#1d232a] ">
        <Slidenav/>
        <div className="w-full">
        <Navbar2 />
        <Wavestatics/>
        </div>
    </div>  
    
    </>
  )
}
