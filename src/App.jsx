import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./Component/Auth/SignIn";
// import Navbar from "./Component/Layout/Navbar";
import { Toaster } from "react-hot-toast";
import Home from "./Component/Home";
import AllBill from "./Component/Billing/AllBill";
import BillDetails from "./Component/Billing/BillDetails";
import { Sidebar } from "./Component/Layout/Sidebar/Sidebar";
import CalendarPage from "./Component/Calender/CalendarPage";


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/bill" element={<AllBill />} />
        <Route path="/calender" element={<CalendarPage/>} />
        <Route path="/bill/:id" element={<BillDetails />} />

      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
