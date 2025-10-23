import React from "react";
import { Line } from "rc-progress";
import { useDashboard } from "../../context/DashboardContext";

export default function TopProductsList() {
    const { data } = useDashboard();
  const displayData = data?.topProducts || [];

  const colors = ["#0095FF", "#8CFAC7", "#C5A8FF", "#FF8F0D"];
  const headerColor = "#96A5B8"; // Header row color

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 lg:col-span-2 h-full">
      <h3 className="font-semibold mb-4 text-[#05004E] text-base sm:text-lg md:text-xl">
        Top Products
      </h3>

      {/* Header */}
      <div
        className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 font-medium border-b pb-2 mb-2"
        style={{ color: headerColor }}
      >
        <span>#</span>
        <span>Name</span>
        <span>Popularity</span>
        <span>Sales</span>
      </div>

      {/* Data rows */}
      <div className="space-y-2">
        {displayData.map((product, index) => {
          const color = colors[index % colors.length];

          return (
            <div
              key={index}
              className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 items-center py-2 border-b last:border-none"
            >
              {/* Index */}
              <span className="text-gray-500">{String(index + 1).padStart(2, "0")}</span>

              {/* Name */}
              <span className="flex items-center gap-2">{product.name}</span>

              {/* Popularity Line */}
              <div className="flex items-center w-full">
                <Line
                  percent={product.popularity}
                  strokeWidth={3}
                  strokeColor={color}
                  trailWidth={3}
                  trailColor={`${color}33`} // semi-transparent trail
                  className="w-full rounded"
                />
              </div>

              {/* Sales % */}
              <span
                className="px-2 py-1 text-sm font-medium rounded"
                style={{
                  border: `1px solid ${color}`,
                  backgroundColor: `${color}33`, // semi-transparent background
                  color: color,
                }}
              >
                {product.sales}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
