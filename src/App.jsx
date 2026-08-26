import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Signuppage from './pages/signuppage'
import Forgetpassword from './pages/forgotpassword'
import Loginpage from './pages/Loginpage'
import Notfound from './pages/Notfound'



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Loginpage/>}/>
          <Route path="signup" element={<Signuppage/>}/>
          <Route path="forgotpassword" element={<Forgetpassword/>} />
          <Route path="Home" element={<Homepage/>}/>

          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </>    
  )
}
