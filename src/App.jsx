import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Signuppage from './pages/signuppage'
import Forgetpassword from './pages/forgotpassword'
import Loginpage from './pages/Loginpage'
import Notfound from './pages/Notfound'
import Transactions from './pages/Transactions'
import CheckingAccountDetails from './components/CheckingDetails'



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage/>}/>
          <Route path="Signup" element={<Signuppage/>}/>
          <Route path="Forgot-password" element={<Forgetpassword/>}/>
          <Route path="Home" element={<Homepage/>}/>
          <Route path="Transactions" element={<Transactions/>}/>
          <Route path="CheckingAccountDetails" element={<CheckingAccountDetails/>}/>

          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </>    
  )
}
