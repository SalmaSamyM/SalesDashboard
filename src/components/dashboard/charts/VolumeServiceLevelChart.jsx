import React from "react";
import { BarChart, Bar, Tooltip } from "recharts";
import { useDashboard } from "../../../context/DashboardContext";

export default function VolumeServiceLevelChart() {
  const { data } = useDashboard();
  const displayData = data?.volumeVsService || [];
  // Totals
  const totalVolume = displayData.reduce((sum, item) => sum + item.Volume, 0);
  const totalService = displayData.reduce((sum, item) => sum + item.Service, 0);

  return (
    <div className="p-4 bg-white shadow-xl rounded-xl h-full">
      <h2 className="text-lg mb-4 font-semibold text-[#05004E]">
        Volume vs Service Level
      </h2>

      {/* Chart */}
      <BarChart
        data={displayData}
        style={{ width: '100%', maxHeight: '22vh', aspectRatio: 1.618 }}
        responsive
      >
        <Tooltip />
        <Bar dataKey="Volume" stackId="a" fill="#0095FF" barSize={12} />
        <Bar dataKey="Service" stackId="a" fill="#00E096" barSize={12} />
      </BarChart>

      {/* Divider */}
      <div className="border-t border-gray-200 my-3"></div>

      {/* Legend Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center text-gray-700 gap-3">
        {/* Volume */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#0095FF]"></span>
            <span className="text-sm font-medium text-[#96A5B8]">Volume</span>
          </div>
          <span className="font-poppins font-medium">
            {totalVolume.toLocaleString()}
          </span>
        </div>

        {/* Vertical divider for large screens */}
        <div className="hidden sm:block w-px h-10 bg-gray-300"></div>

        {/* Service */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#00E096]"></span>
            <span className="text-sm font-medium text-[#96A5B8]">Service</span>
          </div>
          <span className="font-poppins font-medium">
            {totalService.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
