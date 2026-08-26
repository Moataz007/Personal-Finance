import Goals from "./Goals";
import Totalbalance from "./Totalbalance";
import UpcomingBill from "./UpcomingBill";


export default function Cards() {
  return (
    <>
        <div className="mr-8 flex gap-6">
          <Totalbalance/>
          <Goals/>
          <UpcomingBill/>
        </div>
    
    
    </>
  )
}
