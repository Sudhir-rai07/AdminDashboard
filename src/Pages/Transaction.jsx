import React from 'react'
import InfoTable from '../Utils/Table/InfoTable'
import data from '../constants/transactionData.json'

const Transaction = () => {
  const columns = [
    {header: "ID", accessorKey: "id"},
    {header: "Quantity", accessorKey: "quantity"},
    {header: "Amount", accessorKey: "amount"},
    {header: "Discount", accessorKey: "discount"},
    {header: "Success", accessorKey: "success"},
  ]
  return (
    <div className='flex flex-col w-full h-screen bg-gray-100'>
    <div>
      <h2 className='my-8 text-3xl font-semibold tracking-wider'>Transactions</h2>
    </div>
     <main className='w-full bg-white-400'>
      <InfoTable columns={columns} data={data}/>
     </main>
    </div>
  )
}

export default Transaction
