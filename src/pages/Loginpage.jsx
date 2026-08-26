import Login from "../components/Login";
import Googlesignup from "../components/Googlesignup";
import { Link } from "react-router-dom";
import Passwordlabel from "../components/Passwordlabel";
export default function Loginpage() {
  return (
    <>
    <div className="flex flex-col justify-center h-screen items-start md:items-center">
      <div className="px-1 lg:px-0 md:max-w-95 w-full ">
        <p className="big-word text-[40px] tracking-[8%] text-[#299D91] font-extrabold text-center pb-16">
          FINE
          <span className="small-word font-medium text-[40px] tracking-[8%]">
            bank.
          </span>
          IO
        </p>
        {/* email address */}
        <p className="small-word font-medium text-[#191D23] text-[16px] dark:text-[#4B5768]">
          Email Address
        </p>
        <input
          className="rounded-lg border w-full border-[#4B5768] p-3"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="johndoe@email.com"
        />
        {/* password */}
        <div className="flex justify-between pt-7">
          <p className="small-word font-medium text-[#191D23] text-[16px] dark:text-[#4B5768]">
            Password
          </p>
          <Link
            to="/forgotpassword"
            className="small-word font-medium text-[#299D91] text-[12px]"
          >
            Forgot Password?
          </Link>
        </div>
        <Passwordlabel/>
        {/* check box */}
        <div className="mt-8 pb-4">
          <input id="Keep me signed in" type="checkbox" />
          <label
            className="pl-4 small-word font-light text-[#191D23] text-[16px] dark:text-[#4B5768]"
            htmlFor="Keep me signed in"
          >
            Keep me signed in
          </label>
        </div>
        {/* login button */}
        <Login />
        {/* google sign in */}
        <div className="mt-11.25 mb-10.5 flex flex-col items-center relative">
          <div className="border-[.5px] w-85.5 border-[#4B5768]/25 "></div>
          <p className="small-word font-normal text-[#999DA3] text-[14px] absolute -top-8 bg-[white] p-5 gap-2">
            or sign in with
          </p>
        </div>
        <Googlesignup />
        <Link
          to="/signup"
          className="flex justify-center mt-10 small-word font-semibold text-[#299D91] text-[16px] leading-6"
        >
          Create an account
        </Link>
      </div>
    </div>
    </>
  );
}
