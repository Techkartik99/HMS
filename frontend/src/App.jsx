import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserAuth from "./Pages/User/userAuth"
import Landing from "./Pages/Landing"
import AddHotel from "./Pages/Owner/addHotel"
import SellerAuth from "./Pages/Owner/SellerAuth"
import SellerDashboard from "./Pages/Owner/SellerDashboard"
import AdminAuth from "./Pages/Admin/AdminAuth"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/"  element={<Landing />} />
      <Route path="/auth"  element={<UserAuth />} />
      <Route path="/seller/auth"  element={<SellerAuth />} />
      <Route path="/seller/add" element={<AddHotel />} />
      <Route path="/seller/dashboard" element={<SellerDashboard />}  />
      <Route path="/admin/auth" element={<AdminAuth />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App