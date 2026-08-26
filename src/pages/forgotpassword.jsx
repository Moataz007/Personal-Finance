import { Link } from "react-router-dom";
import Signup from "../components/Signup";

export default function Forgetpassword() {
  return (
    <>
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="px-1 lg:px-0 md:max-w-95 w-full">
                <p className="big-word text-[40px] tracking-[8%] text-[#299D91] font-extrabold text-center mb-9">
                  FINE
                  <span className="small-word font-medium text-[40px] tracking-[8%]">
                    bank.
                  </span>
                  IO
                </p>
                <div className="mb-9 pr-7.25 pl-7.25">
                <p className="font-bold small-word text-center pb-2 leading-10 text-[24px] text-[#191D23] dark:text-[#4B5768]">Forgot Password?</p>
                <p className="text-center small-word font-normal text-[18px] leading-6 text-[#666666] ">Enter your email address to get the <br /> password reset link.</p>
                </div>

                <div>
                  <p className="small-word font-medium text-[#191D23] text-[16px] dark:text-[#4B5768]">Email Address</p>
                  <form action="">
                    <input className="rounded-lg border border-[#4B5768] w-full p-3" type="text" placeholder="hello@example.com" />
                  </form>
                  <div className="mt-8">
                  <Signup/>
                  </div>
                  <Link to="/login" className="block text-center small-word font-semibold text-[16px] leading-6 text-[#878787] mt-6">Back to login</Link>
                </div>
      </div>
    </div>
            </>
  )
}
