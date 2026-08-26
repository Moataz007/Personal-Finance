import { Link } from 'react-router-dom'
import '../style/login.css'

export default function Login() {
  return (
    <>
        <div>
            <Link to="/Home" className='block word bg-[#299D91] rounded-sm text-white font-semibold text-[16px] text-center w-full py-3'>Login</Link>
        </div>
    </>
  )
}
