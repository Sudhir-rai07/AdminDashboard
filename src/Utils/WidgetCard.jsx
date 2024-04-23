import React from "react";
import { HiTrendingDown } from "react-icons/hi";
import { HiTrendingUp } from "react-icons/hi";

const WidgetCard = ({ percent, amount, value, heading, border,profit }) => {
  console.log(border)
  const style ={
color: border,
position: 'relative',
height: '5rem',
width: '5rem',
borderRadius: '100%',
display: 'grid',
placeItems: "center",
background: `conic-gradient(${border} ${Math.abs(percent/100)*360}deg, rgb(255 253 253) 1deg)`,

  }
  return (
    <div className="px-6 py-8 flex bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg mt-8 ">
      <div className="flex flex-col justify-center h-full mr-8">
        <p className="text-sm tracking-wide text-gray-500">{heading}</p>
        <h2 className="mt-2 text-2xl font-bold">{amount ? `$${value}` : value}</h2>
        <span className={`text-sm ${profit ? "text-green-500" : "text-red-500"} flex items-center gap-2`}>{profit ? <HiTrendingUp /> : <HiTrendingDown />}{percent}%</span>
      </div>
      <div style={style} className={`before:absolute before:h-[4rem] before:w-[4rem] before:bg-white before:rounded-full`}><span className="z-30">{percent}%</span></div>
    </div>
  );
};

export default WidgetCard;
