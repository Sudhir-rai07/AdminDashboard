import React from "react";
import { FaBell } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import WidgetCard from "../Utils/WidgetCard";
import { widgetData } from "../constants/widgetData";
import { BarChart } from "../Utils/Charts/BarChart";
import { DoughnutChart } from "../Utils/Charts/Doughnut";
import InfoTable from "../Utils/Table/InfoTable";
import data from "../constants/transactionData.json";
import PieChart from "../Utils/Charts/PieChart";

const DashBoard = () => {
  const imgUrl = "https://xsgames.co/randomusers/assets/avatars/female/46.jpg";
  return (
    <div className="w-full px-8 full scrollbar-none">
      <div className="flex items-center justify-between w-full h-12 px-2">
        <FcSearch className="mr-2 text-2xl" />
        <input
          type="search"
          placeholder="search for data, user, docs"
          className="w-full h-full bg-gray-100 border-none focus:outline-none"
        />
        <div className="flex items-center">
          <FaBell />
          <div className="w-12 h-12 ml-3 overflow-hidden rounded-full">
            <img src={imgUrl} alt="" className="w-full" />
          </div>
        </div>
      </div>
      <hr className="h-[2px] w-full bg-pink-600" />

      <div className="flex flex-row flex-wrap justify-center gap-4 px-2">
        {widgetData.map((data, idx) => (
          <WidgetCard
            key={idx}
            percent={data.percent}
            amount={data.amount}
            value={data.value}
            heading={data.heading}
            border={data.border}
            profit={data.profit}
          />
        ))}
      </div>

      {/* Bar chart */}
      <div className="flex flex-col justify-between w-full h-screen my-4 mt-10 sm:h-96 sm:flex-row sm:gap-4">
        {/* BAR CHART */}
        <div className="h-full flex-shrink px-4 py-4 bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] sm:w-1/2  w-full flex-grow-[2]">
          <BarChart
            lable={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ]}
            data1={[1200, 1700, 1000, 900, 700, 2100, 120]}
            data2={[132, 324, 356, 738, 940, 320, 340]}
            bg1={"orange"}
            bg2={"hotpink"}
            axis={"x"}
            text={"Revenue and Transactions"}
          />
        </div>
        {/* TODO: INVENTORY  */}
        <div className="flex justify-center w-1/2 h-full mx-auto mt-8 bg-white rounded-lg sm:mt-0 sm:w-1/2">
          <PieChart labels={["Laptop", "Camera", "Jeans", "Shoes"]}
          labelText={"Inventory"}
          Cdata={[40, 60, 30, 100]}
          bgColor={["#d7ecfb","#ffe0e6","#dbf2f2", "#ebe0ff"]}
        borderColor={["#65b7ef", "#ff7e99","#6bcbcb", "#ad84ff"]}
           />
        </div>
      </div>

      {/* Gender{Donot} and Table */}
      <div className="flex flex-wrap justify-center w-full h-full gap-6 mt-4 mb-8 sm:flex-nowrap">
        <div className=" w-1/2 py-8 px-3  bg-white flex flex-col justify-center rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
         
            <DoughnutChart
              data1={[70, 30]}
              bg={["blue", "pink"]}
              text={"Gender Ratio"}
            />
       
        </div>

        {/* Table */}
        <div className="w-full flex-col rounded-lg  bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex">
          <h2 className="mt-4 mb-4 text-center">TOP TRANSACTIONS</h2>
          <InfoTable
            data={data}
            columns={[
              { header: "ID", accessorKey: "id" },
              { header: "Quantity", accessorKey: "quantity" },
              { header: "Amount", accessorKey: "amount" },
              { header: "Discount", accessorKey: "discount" },
              { header: "Success", accessorKey: "success" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
