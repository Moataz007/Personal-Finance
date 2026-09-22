import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound'

import Loginpage from './pages/Loginpage'
import Forgetpassword from './pages/forgotpassword'
import Signuppage from './pages/signuppage'
import Homepage from './pages/Homepage'
import Balances from './pages/Balances'
import CheckingAccountDetails from './components/CheckingDetails'
import Transactions from './pages/Transactions'
import Bills from './pages/Bills'
import Expenses from './pages/Expenses'
import Goalspage from './pages/Goalspage'



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage/>}/>
          <Route path="Signup" element={<Signuppage/>}/>
          <Route path="Forgot-password" element={<Forgetpassword/>}/>
          <Route path="Home" element={<Homepage/>}/>
          <Route path="Balances" element={<Balances/>}/>
          <Route path="Transactions" element={<Transactions/>}/>
          <Route path="CheckingAccountDetails" element={<CheckingAccountDetails/>}/>
          <Route path="Bills" element={<Bills/>}/>
          <Route path="Expenses" element={<Expenses/>}/>
          <Route path="Goals" element={<Goalspage/>}/>

          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </>    
  )
}
