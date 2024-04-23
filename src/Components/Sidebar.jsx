import React, { useState } from "react";
import { sideBar } from "../constants/constants";
import { Link, useLocation } from "react-router-dom";



const Sidebar = ({show}) => {
  const location = useLocation();
  return (
    <aside
      className={`sm:relative absolute top-0 left-0 scrollbar-none overflow-y-scroll z-40  sm:translate-x-0 w-64 h-full bg-white px-4 transition-all duration-300 ${
        show ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <div>
        <h2 className="text-3xl font-bold font-lato">Logo</h2>
      </div>
      <div className="pb-4">
        <ul>
          <li className="pt-3 tracking-wider text-gray-500">Dashboard</li>
          {sideBar.map((item) => (
              <div key={item.id} className={`w-full  my-2 font-lato`}>
                <Link
                  to={item.url}
                  className={`w-full flex items-center justify-start px-2 py-2 rounded-lg ${
                    location.pathname === item.url
                      ? "bg-[#e5f1ff] text-blue-600"
                      : ""
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.text}</span>
                </Link>
                {item.breakLine && <span className="pt-3 tracking-wider text-gray-500">{item.textname}</span>}
              </div> 
          ))}
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
