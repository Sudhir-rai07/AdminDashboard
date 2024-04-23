import React from "react";
import LineChart from "../Utils/Charts/LineChart";

const LineChartComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
     <div className="w-4/5 h-4/5">
     <LineChart
        labels={[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ]}
        data1={[100, 140, 89, 54, 78, 99, 120]}
        label1={"Active Users"}
        bg1={"#8c8cf959"}
        border1={"#3434f5c9"}
      />
     </div>

     <div className="w-4/5 h-4/5">
     <LineChart
        labels={[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ]}
        data1={[10020, 14220, 11000, 7487, 7887, 9900, 12020]}
        label1={"Total Revenue"}
        bg1={"#a1e2ab"}
        border1={"#14b82d"}
      />
     </div>
    </div>
  );
};

export default LineChartComponent;
