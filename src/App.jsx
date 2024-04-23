import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Loader from "./Components/Loader";
import Sidebar from "./Components/Sidebar";
import DashBoard from "./Pages/DashBoard";
import Customers from "./Pages/Customers";
import Products from "./Pages/Products";
import Transaction from "./Pages/Transaction";
import { FaCableCar, FaChartBar } from "react-icons/fa6";
import { BarChart } from "./Utils/Charts/BarChart";
import BarChartComponent from "./Pages/BarChartComponent";
import LineChartComponent from "./Pages/LineChartComponent";
import StopWatch from "./Pages/StopWatch";

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const handleShowSidebar = () => {
    setShowSideBar((prev) => !prev);
  };
  return (
    <Router>
      <div className="relative flex w-full h-screen gap-4 bg-gray-100">
      <button className="absolute z-50 flex items-center justify-center w-10 h-10 text-xl text-blue-500 bg-gray-100 rounded-full top-1 left-1 sm:hidden"  onClick={handleShowSidebar}><FaChartBar /></button>
        <Sidebar show={showSideBar} />
        <div className="sm:w-[calc(100%-256px)] w-full overflow-y-scroll">
        <Routes>
            <Route path="/" element={<button className="w-full text-center"><Link to={'/admin/dashboard'}>Go to dashboard</Link></button>} />
            <Route path="/admin/dashboard" element={<DashBoard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transaction />} />

            <Route path="/admin/chart/bar" element={<BarChartComponent />} />
            <Route path="/admin/chart/line" element={<LineChartComponent />} />
            
            <Route path="/admin/app/stopwatch" element={<StopWatch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
