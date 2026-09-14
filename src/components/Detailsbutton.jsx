import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Detailsbutton() {
  return (
    <>
        <Link to="/CheckingAccountDetails" className="flex items-center bg-[#299D91] py-2 px-5 rounded-sm gap-2 cursor-pointer text-white hover:text-black">
                    <p className="text-[14px]font-medium">Details</p>
                    <ChevronRight/>
                </Link>
    </>
  )
}
