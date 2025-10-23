import React from "react";
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip } from "recharts";
import { useDashboard } from "../../../context/DashboardContext";

export default function TargetVsRealityChart() {
  const { data } = useDashboard();
  const displayData = data?.targetVsReality || [];
  const totalReality = displayData.reduce((sum, item) => sum + item.reality, 0);
  const totalTarget = displayData.reduce((sum, item) => sum + item.target, 0);

  return (
    <div className="p-4 bg-white shadow-xl rounded-xl h-full flex flex-col">
      <h2 className="text-lg  mb-4 font-semibold text-[#05004E]">
        Target vs Reality Sales
      </h2>

      <div className="flex-1">
        <BarChart
          data={displayData}
          width={400}
          height={180}
          style={{ width: "100%", height: "100%" }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip formatter={(value) => `$${value}k`} />
          <Bar
            dataKey="reality"
            name="Reality Sales"
            fill="#4AB58E"
            radius={[4, 4, 0, 0]}
            barSize={35}
          />
          <Bar
            dataKey="target"
            name="Target Sales"
            fill="#FFCF00"
            radius={[4, 4, 0, 0]}
            barSize={24}
          />
        </BarChart>
      </div>

      {/* Totals below chart */}
      <div className="flex flex-col gap-1">
        {/* Reality */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">

            <img src="/assets/realitysales.svg" className="w-10 h-10" />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Reality Sales
              </p>
              <p className="text-xs text-gray-500">Global</p>
            </div>
          </div>
          <p className="text-green-600 font-medium ">
            {totalReality.toFixed(3)}
          </p>
        </div>

        {/* Target */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/targetsales.svg" className="w-10 h-10" />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Target Sales
              </p>
              <p className="text-xs text-gray-500">Commercial</p>
            </div>
          </div>
          <p className="text-yellow-500 font-medium ">
            {totalTarget.toFixed(3)}
          </p>
        </div>
      </div>
    </div>
  );
}
