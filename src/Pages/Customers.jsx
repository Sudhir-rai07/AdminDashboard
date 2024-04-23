import React from 'react'
import data from '../constants/customerData.json'
import InfoTable from '../Utils/Table/InfoTable'

const Customers = () => {
  return (
    <div className="flex w-full h-screen bg-gray-400">
    <main className="w-full bg-white">
    <div className="my-8 text-3xl"><h1>Customers</h1></div>
      <InfoTable
        data={data}
        columns={[
          { header: "Id", accessorKey: "id" },
          { header: "Name", accessorKey: "name" },
          { header:"Email", accessorKey: "email" },
          { header: "Gender", accessorKey: "gender" },
        ]}
      />
    </main>
  </div>
  )
}

export default Customers
