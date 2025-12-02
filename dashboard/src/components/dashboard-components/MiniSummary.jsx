import React from "react";
import {
  Wallet,
  PackageCheck,
  TrendingUp,
  AlertTriangle,
  BarChart4,
  UserPlus,
} from "lucide-react";
import { useSelector } from "react-redux";
const MiniSummary = () => {
  const{
    topSellingProducts,
    lowStockProducts,
    revenueGrowth,
    newUsersThisMonth,
    currentMonthSales,
    orderStatusCounts,
  }=useSelector((state)=>state.admin);

  const safeLowStockProducts = Array.isArray(lowStockProducts) ? lowStockProducts : [];
  const lowStockNames = safeLowStockProducts
    .map((product) => product?.name)
    .filter(Boolean);
  const lowStockSubText = lowStockNames.length
    ? `${lowStockNames.join(", ")} ${lowStockNames.length === 1 ? "is" : "are"} running low on stock`
    : "No products running low on stock";

  const topSeller = Array.isArray(topSellingProducts) ? topSellingProducts[0] : null;

  let totalOrders=0;
  totalOrders=Object.values(orderStatusCounts).reduce(
    (acc,count)=> acc+count,
    0
  );
  const summary=[
    {
      text:"Total Sales this Month",
      subText: `This month's sales: BDT ${currentMonthSales}`,
      icon:<Wallet className="text-green-600"/>
    },
    {
      text:"Total Orders Placed",
      subText: `Total orders placed: ${totalOrders}`,
      icon: <PackageCheck className="text-green-600"/>
    },
    {
      text:"Top  Selling Product",
      subText: topSeller
        ? `Best Seller: ${topSeller.name} (${topSeller.total_sold} sold)`
        : "No sales data yet",
      icon: <TrendingUp className="text emerald-600"/>
    },
    {
      text:"Low Stock Alerts",
      subText: lowStockSubText,
      icon:<AlertTriangle className="text-red-600"/>
    },
    {
      text:"Revenue Growth Rate",
      subText: `Revenue ${revenueGrowth.includes("+") ? "up" : "down"} by ${revenueGrowth} compares to last month`,
      icon:<BarChart4 className="text-purple-600"/>
    },
    {
      text:"New Customers This Month",
      subText: `New Customers joined: ${newUsersThisMonth}`,
      icon: <UserPlus className="text-yellow-600"/>
    },
  ]


};

export default MiniSummary;

