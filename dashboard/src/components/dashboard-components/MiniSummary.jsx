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

  
};

export default MiniSummary;

