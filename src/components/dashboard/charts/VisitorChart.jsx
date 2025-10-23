import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
} from "recharts";
import { useDashboard } from "../../../context/DashboardContext";

export default function VisitorLineChart() {
      const { data } = useDashboard();
  const displayData = data?.visitorInsights || [];
    return (
        <div className="p-4 bg-white shadow-xl rounded-xl h-full ">
            <h2 className="text-lg mb-4 font-semibold text-[#05004E]">Visitor Insights</h2>
            <LineChart
                data={displayData}
                responsive
                className="lg:!h-[250px] h-208 xl:!h-[250px] 2xl:!h-[208px]"
            >
                <CartesianGrid vertical={false} stroke="rgba(123, 145, 176, 0.3)" />

                <XAxis
                    dataKey="month"
                    tick={{ fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    tick={{ fontSize: 10 }}
                    domain={[0, 400]}
                    tickCount={5}
                    axisLine={false}
                    tickLine={false}
                />
                <Legend
                    iconType="none"
                    verticalAlign="bottom"
                    wrapperStyle={{ display: "flex", justifyContent: "center", gap: 12 }}
                    //Custom icon
                    formatter={(value, entry) => (
                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                            <div
                                style={{
                                    width: 12,
                                    height: 12,
                                    backgroundColor: entry.color,
                                    borderRadius: 2,
                                }}
                            ></div>
                            {value}
                        </span>
                    )}
                />


                <Line
                    type="monotone"
                    dataKey="loyal"
                    name="Loyal Customers"
                    stroke="#A700FF"
                    strokeWidth={2}
                    dot={false}
                    fillOpacity={0.2}
                    fill="#A700FF"
                />
                <Line
                    type="monotone"
                    dataKey="new"
                    name="New Visitors"
                    stroke="#EF4444"
                    strokeWidth={2}
                    dot={false}
                    fillOpacity={0.2}
                    fill="#EF4444"
                />
                <Line
                    type="monotone"
                    dataKey="special"
                    name="Unique Visitors"
                    stroke="#3CD856"
                    strokeWidth={2}
                    dot={false}
                    fillOpacity={0.2}
                    fill="#3CD856"
                />
            </LineChart>
        </div>
    );
}
