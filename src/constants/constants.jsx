import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuBarChart3 } from "react-icons/lu";
import { FaStopwatch } from "react-icons/fa";
import { IoTicket } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa6";


export const sideBar =[
    {icon: <MdDashboard />, url: "/", text: "Dashboard", id: "001"},
    {icon: <MdShoppingBag />, url: "/admin/product", text: "Product" ,id: "003"},
    {icon: <FaUser />, url: "/admin/customer", text: "Customer" ,id: "002"},
    {icon: <FaMoneyCheckDollar />, url: "/admin/transaction", text: "Transaction",id: "004"},
    {breakLine: true,textname:"Charts",id: "0001"},
    {icon: <LuBarChart3 />, url: "/admin/chart/bar", text: "Bar", id: "005"},
    // {icon: <FaChartPie />, url: "/admin/chart/pie", text: "Pie" ,id: "006"},
    {icon: <BsGraphUpArrow />, url: "/admin/chart/line", text: "Line" ,id: "007"},
    {breakLine: true,textname:"Apps", id: "0002"},
    {icon: <FaStopwatch />, url: "/admin/app/stopwatch", text: "Stopwatch", id: "008"},
    {icon: <IoTicket />, url: "/admin/app/coupon", text: "Coupon" ,id: "009"},
    {icon: <FaGamepad />, url: "/admin/app/toss", text: "Toss" ,id: "010"},

]
