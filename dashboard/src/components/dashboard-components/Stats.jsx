import React, { useEffect, useState } from "react";
import { formatNumber } from "../../lib/helper";
import { useSelector } from "react-redux";

const Stats = () => {
  const [revenueChange, setRevenueChange] = useState("");
  const {
    totalUsersCount,
    todayRevenue,
    yesterdayRevenue,
    totalRevenueAllTime,
  } = useSelector((state) => state.admin);

  const stats = [
    {
      title: "Today's Revenue",
      value: formatNumber(todayRevenue),
      change: revenueChange,
    },
    {
      title: "Total Users",
      value: totalUsersCount || 0,
      change: null,
    },
    {
      title: "All Time Revenue",
      value: formatNumber(totalRevenueAllTime),
      change: null,
    },
  ];

  useEffect(() => {
    if (yesterdayRevenue) {
      let change =
        yesterdayRevenue === 0
          ? 100
          : ((todayRevenue - yesterdayRevenue) / yesterdayRevenue) * 100;
      const revenueChangeText = `${change >= 0 ? "+" : "-"}${change.toFixed(
        2
      )}% from yesterday`;
      setRevenueChange(revenueChangeText);
    }
  }, [yesterdayRevenue]);

  
};

export default Stats;
