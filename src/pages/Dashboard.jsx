import React, { useMemo } from "react";
import Loader from "../components/common/Loader";
import TodaySales from "../components/dashboard/TodaySales";
import RevenueBarChart from "../components/dashboard/charts/RevenueBarChart";
import SalesByCountryChart from "../components/dashboard/charts/SalesByCountryChart";
import VisitorLineChart from "../components/dashboard/charts/VisitorChart";
import TopProductsList from "../components/dashboard/TopProducts";
import CustomerSatisfactionChart from "../components/dashboard/charts/CustomerSatisfactionChart";
import TargetVsRealityChart from "../components/dashboard/charts/TargetVsRealityChart";
import VolumeServiceLevelChart from "../components/dashboard/charts/VolumeServiceLevelChart";
import { useDashboard } from "../Context/DashboardContext";

export default function Dashboard() {
  const { loading, error } = useDashboard();
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Loader message="Loading your dashboard data..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600 font-semibold">
        Failed to load dashboard data. Please refresh the page.
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-8 bg-gray-50 min-h-screen">
      {/* ===== Section: Sales Overview ===== */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
          <div className="lg:col-span-2">
            <TodaySales />
          </div>
          <div>
            <VisitorLineChart />
          </div>
        </div>
      </section>

      {/* ===== Section: Performance Analytics ===== */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-stretch">
          <div className="lg:col-span-2">
            <RevenueBarChart />
          </div>
          <CustomerSatisfactionChart />
          <TargetVsRealityChart />
        </div>
      </section>

      {/* ===== Section: Product & Market Insights ===== */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-stretch">
          <div className="lg:col-span-2">
            <TopProductsList  />
          </div>
          <SalesByCountryChart/>
          <VolumeServiceLevelChart  />
        </div>
      </section>
    </div>
  );
}
