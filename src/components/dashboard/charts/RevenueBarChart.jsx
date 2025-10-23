import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { useDashboard } from "../../../context/DashboardContext";

export default function RevenueBarChart() {
    const { data } = useDashboard();
    const displayData = data?.totalRevenue || [];
    return (
        <div className="p-4 border-2 border-white bg-white shadow-xl rounded-xl w-full h-full">
            <h2 className="text-lg mb-4 font-semibold text-[#05004E]]">Total Revenue</h2>
            <BarChart data={displayData} style={{ width: '100%', maxHeight: '25vh', aspectRatio: 1 }}
                responsive barSize={12}>
                <CartesianGrid vertical={false} stroke="rgba(123, 145, 176, 0.3)" />

                <XAxis
                    dataKey="day"
                    tick={{ fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    tick={{ fontSize: 10 }}
                    domain={[0, '250000']}
                    tickCount={6}
                    tickFormatter={(value) => (value !== 0 ? `${value / 1000}k` : "0")}
                    axisLine={false}
                    tickLine={false}
                />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Legend verticalAlign="bottom" height={20} iconType="circle" />
                <Bar dataKey="online" name="Online Sales" fill="#0095FF" />
                <Bar dataKey="offline" name="Offline Sales" fill="#00E096" />
            </BarChart>
        </div>
    );
}
