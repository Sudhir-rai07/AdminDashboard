import React from "react";
import InfoTable from "../Utils/Table/InfoTable";
import data from "../constants/productData.json";

const Products = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <main className="w-full bg-white">
      <div className="my-8 text-3xl"><h1>Transaction</h1></div>
        <InfoTable
          data={data}
          columns={[
            { header: "Id", accessorKey: "id" },
            { header: "Name", accessorKey: "name" },
            { header:"Stock", accessorKey: "stock" },
            { header: "Action", accessorKey: "action" },
          ]}
        />
      </main>
    </div>
  );
};

export default Products;
