import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
} from "recharts";
import legendLastMonth from "../../../assets/legendLastMonth.svg";
import legendThisMonth from "../../../assets/legendThisMonth.svg";
import { useDashboard } from "../../../context/DashboardContext";

export default function CustomerSatisfactionChart () {
  const { data } = useDashboard();
  const displayData = data?.customerSatisfaction || [];
  const totalLastMonth = displayData.reduce((sum, d) => sum + d.lastMonth, 0);
  const totalThisMonth = displayData.reduce((sum, d) => sum + d.thisMonth, 0);

  return (
    <div className="p-2 bg-white shadow-xl rounded-xl h-full">
      <h2 className="text-lg mb-4 font-semibold text-[#05004E]">Customer Satisfaction</h2>

      {/* Chart */}
      <AreaChart
        data={displayData}
        style={{ width: '100%', maxHeight: '22vh', aspectRatio: 1.618 }}
        responsive
      >
        <defs>
          <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
          </linearGradient>
        </defs>

        <Tooltip />

        <Area
          type="monotone"
          dataKey="lastMonth"
          stroke="#3b82f6"
          strokeWidth={2}
          fill="url(#colorLastMonth)"
          dot={{ r: 3 }}
        />
        <Area
          type="monotone"
          dataKey="thisMonth"
          stroke="#10b981"
          strokeWidth={2}
          fill="url(#colorThisMonth)"
          dot={{ r: 3 }}
        />
      </AreaChart>
      {/* Horizontal line */}
      <div className="border-t border-gray-200 my-3"></div>

      {/* Legend section */}
      <div className="flex flex-col sm:flex-row items-center justify-center text-gray-700 gap-3">
        {/* Last Month */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <img src={legendLastMonth} alt="Last Month" className="w-5 h-5" />
            <span className="text-sm font-medium text-[#96A5B8]">Last Month</span>
          </div>
          <span className="font-poppins font-medium">${totalLastMonth.toLocaleString()}</span>
        </div>

        {/* Vertical divider for larger screens */}
        <div className="hidden sm:block w-px h-10 bg-gray-300"></div>

        {/* This Month */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <img src={legendThisMonth} alt="This Month" className="w-5 h-5" />
            <span className="text-sm font-medium text-[#96A5B8]">This Month</span>
          </div>
          <span className="font-poppins font-medium ">${totalThisMonth.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
