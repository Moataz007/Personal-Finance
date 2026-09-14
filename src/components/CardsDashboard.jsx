import Goals from "./Goals";
import Totalbalance from "./Totalbalance";
import UpcomingBill from "./UpcomingBill";


export default function CardsDashboard() {
  return (
    <>
        <div className="mr-8 grid lg:grid-cols-3 gap-6 sm:grid-cols-3 md:grid-cols-2 md:ml-20 lg:ml-0 ">
          <Totalbalance/>
          <Goals/>
          <UpcomingBill/>
        </div>
    
    
    </>
  )
}
