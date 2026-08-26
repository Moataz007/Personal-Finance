import { Link } from "react-router-dom";
import Googlesignup from "../components/Googlesignup";
import Signup from "../components/Signup";
import Passwordlabel from "../components/Passwordlabel";

export default function Signuppage() {
  return (
    <>
    <div className="flex flex-col justify-center h-screen items-start md:items-center">
          <div className="px-1 lg:px-0 md:max-w-95 w-full">
            <p className="big-word text-[40px] tracking-[8%] text-[#299D91] font-extrabold text-center mb-9">
              FINE
              <span className="small-word font-medium text-[40px] tracking-[8%]">
                bank.
              </span>
              IO
            </p>
            <p className="font-bold small-word text-center mb-9 leading-7 text-[24px] ">Create an account</p>
            <div>
              <form action="" className="pb-6">
              <p className="small-word font-medium text-[#191D23] text-[16px] dark:text-[#4B5768]">Name</p>
                <input className="rounded-lg border border-[#4B5768] w-full p-3" type="text" placeholder="Tanzir Rahman" />
              </form>
              <p className="small-word font-medium text-[#191D23] text-[16px] dark:text-[#4B5768]">Email Address</p>
              <form action="">
                <input className="rounded-lg border border-[#4B5768] w-full p-3" type="text" placeholder="hello@example.com" />
              </form>
              <div className="flex justify-between pt-7">
                <p className="small-word font-medium text-[#191D23] text-[16px] dark:text-[#4B5768]">Password</p>
              </div>
              <Passwordlabel />
              <div className="mt-8">
              <p className="small-word font-light text-[14px] leading-5 text-[#4B5768] pb-5">By continuing, you agree to our <span className="font-normal text-[#299D91]">terms of service.</span></p>
              <Signup/>
              </div>
              <div className="mt-11.25 mb-10.5 flex flex-col items-center relative">
                <div className="border-[.5px] w-85.5 border-[#4B5768]/25 "></div>
                <p className="small-word font-normal text-[#999DA3] text-[14px] absolute -top-8 bg-[white] p-5 gap-2">or sign in with</p>
              </div>
              <Googlesignup/>
              <p className="text-center small-word font-semibold text-[16px] leading-6 text-[#4B5768] mt-10">Already have an account? <Link to="/login" className="text-[#299D91]">Sign in here</Link></p>
            </div>
          </div>
    </div>
        </>
  )
}
