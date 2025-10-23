import React, { useRef, useState, useEffect } from "react";
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

    const containerRef = useRef(null);
    const [width, setWidth] = useState(600);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setWidth(containerRef.current.offsetWidth);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="p-4 bg-white shadow-xl rounded-xl h-full">
            <h2 className="text-lg mb-4 font-semibold text-[#05004E]">
                Visitor Insights
            </h2>

            {/* Container for chart and legend */}
            <div ref={containerRef} className="w-full flex flex-col items-center">
                <LineChart
                    width={width}
                    height={200}
                    data={displayData}
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

                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                    {[
                        { name: "Loyal Customers", color: "#A700FF" },
                        { name: "New Visitors", color: "#EF4444" },
                        { name: "Unique Visitors", color: "#3CD856" },
                    ].map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center gap-2 text-sm text-[#05004E]"
                        >
                            <div
                                className="w-3 h-3 rounded-sm"
                                style={{ backgroundColor: item.color }}
                            ></div>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
