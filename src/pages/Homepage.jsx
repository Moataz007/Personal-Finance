import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Slidenav from "../components/Slidenav";

export default function Homepage() {
  return (
    <>
      <div className="flex bg-[#E8E8E8] dark:bg-[#1d232a] ">

        <Slidenav/>
        <div className="w-full">
        <Navbar />
        <Cards/>
        </div>
      </div>
    </>
  );
}
