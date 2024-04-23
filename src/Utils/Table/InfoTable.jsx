import React, { useMemo, useState } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel
} from "@tanstack/react-table";




const InfoTable = ({data, columns}) => {
  const table = useReactTable({
    columns: columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div>
      <table className="w-full rounded-lg">
        <thead className="w-full">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="h-10 py-4 text-black rounded-lg"
            >
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="h-8 text-center hover:bg-gray-300">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div className="mt-3 mb-3 text-center">
        <button  onClick={()=> table.setPageIndex(0)} className="px-4 py-2 ml-3 transition-all duration-300 bg-gray-400 rounded-sm hover:bg-gray-300 active:bg-gray-100">
          First page
        </button>
        <button disabled={!table.getCanPreviousPage()} onClick={()=> table.previousPage()} className="px-4 py-2 ml-3 transition-all duration-300 bg-gray-400 rounded-sm hover:bg-gray-300 active:bg-gray-100 disabled:bg-red-200 disabled:cursor-not-allowed">
          prev
        </button>
        <button disabled={!table.getCanNextPage()} onClick={()=> table.nextPage()}  className="px-4 py-2 ml-3 transition-all duration-300 bg-gray-400 rounded-sm disabled:bg-red-200 disabled:cursor-not-allowed hover:bg-gray-300 active:bg-gray-100">
          next
        </button>
        <button onClick={()=> table.setPageIndex(table.getPageCount() - 1)} className="px-4 py-2 ml-3 transition-all duration-300 bg-gray-400 rounded-sm hover:bg-gray-300 active:bg-gray-100 disabled:bg-gray-700/50">
          Last page
        </button>
      </div>
    </div>
  );
};

export default InfoTable;
