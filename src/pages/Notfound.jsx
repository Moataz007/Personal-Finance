import { Link } from "react-router-dom";

export default function Notfound() {
  return (
      <>
      <div className="flex flex-col items-center justify-center h-screen">

        <p className="font-black text-[200px]">404</p>
        <p className="font-black text-[50px]">Not Found</p>
        <div>

        <span className="font-black text-[30px]">Go to </span>
        <Link className="font-black text-[30px] text-green-500" to="/login" >Home</Link>
        </div>
      </div>
    
    
    </>
  )
}
