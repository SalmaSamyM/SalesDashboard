import React from "react";
import CtaCard from "../common/CtaCard";
import totalSales from "../../assets/todaysales/totalsales.svg";
import totalOrders from "../../assets/todaysales/totalorder.svg";
import productSold from "../../assets/todaysales/productsold.svg";
import newCustomers from "../../assets/todaysales/newcustomers.svg";
import exportIcon from "../../assets/todaysales/exporticon.svg";
import { useDashboard } from "../../context/DashboardContext";

const iconMap = {
  "Total Sales": totalSales,
  "Total Orders": totalOrders,
  "Products Sold": productSold,
  "New Customers": newCustomers,
};

const backgrounds = ["#FFE2E5", "#FFF4DE", "#DCFCE7", "#F3E8FF"];

export default function TodaySales() {
  const { data } = useDashboard();

  const displayData = data?.todaySales || [];

  return (
    <div className="shadow-xl rounded-xl p-6 bg-white h-full">
      <div className="flex justify-between items-center mb-3">
        <div className="flex flex-col">
          <h3 className="font-semibold mb-1 text-[#05004E]">Today’s Sales</h3>
          <h1 className="font-semibold text-[#737791]">Sales Summary</h1>
        </div>

        <button
          className="flex items-center bg-white border border-[#C3D3E2] rounded-xl text-[#0F3659] px-4 py-2 transition"
          onClick={() => console.log("Export clicked")}
        >
          <img src={exportIcon} alt="Export" className="w-4 h-4 mr-2" />
          Export
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayData.map((item, i) => (
          <CtaCard
            key={i}
            icon={iconMap[item.title]}
            iconStyle={{ width: 40, height: 40 }}
            title={item.title}
            titleStyle={{ fontWeight: 600, color: "#333", fontSize: 16 }}
            description={item.value}
            descriptionStyle={{ fontSize: 14, color: "#555" }}
            style={{
              background: backgrounds[i % backgrounds.length],
              borderRadius: 16,
              padding: 20,
            }}
          >
            <div style={{ marginTop: 8, fontSize: 12, color: "#999" }}>
              {item.description}
            </div>
          </CtaCard>
        ))}
      </div>
    </div>
  );
}
