import React from "react";
import { BarChart } from "../Utils/Charts/BarChart";

const BarChartComponent = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-white">
      <section className="w-full h-full bg-white">
        <div className="my-8 text-3xl">
          <h1>Bar Chart</h1>
        </div>
        <div className="w-4/5 m-auto mb-10 h-4/5">
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
            data1={[200, 400, 100, 432, 500, 120, 120]}
            data2={[132, 324, 122, 400, 400, 80, 340]}
            bg1={"blue"}
            bg2={"hotpink"}
            axis={"x"}
            text={"Top selling products and Top Customers"}
            lable1={"Products"}
            lable2={"Customers"}
          />
        </div>
      </section>

      <section className="w-full h-full pb-10 bg-white">
        {/* ORDERS */}
        <div className="w-4/5 m-auto bg-white h-4/5">
          <div className="my-8 text-3xl">
            <h1>Orders</h1>
          </div>
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
            data1={[200, 400, 100, 432, 500, 120, 120]}
            data2={[]}
            bg1={"#00c200"}
            bg2={""}
            axis={"y"}
            text={"Orders through the year"}
            lable1={"Orders"}
            lable2={""}
            hidden={true}
          />
        </div>
      </section>
    </div>
  );
};

export default BarChartComponent;
