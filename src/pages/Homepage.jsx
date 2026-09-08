import CardsDashboard from "../components/CardsDashboard";
import Expensesbreakdown from "../components/Expensesbreakdown";
import Navbar from "../components/Navbar";
import Recenttransaction from "../components/Recenttransaction";
import Slidenav from "../components/Slidenav";
import Statics from "../components/Statics";

export default function Homepage() {
  return (
    <>
      <div className="flex bg-[#E8E8E8] dark:bg-[#1d232a] ">

        <Slidenav/>
        <div className="w-full">
        <Navbar />
        <CardsDashboard/>
        <div className="mt-8 gap-x-6 flex items-center wrap">
        <Recenttransaction/>
        <div className="w-full">
        <Statics/>
        <Expensesbreakdown/>
        </div>
        
        </div>
        </div>
      </div>
    </>
  );
}
