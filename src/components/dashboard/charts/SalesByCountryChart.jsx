import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { useDashboard } from "../../../context/DashboardContext";

const colorScale = ["#FFA800", "#8950FC", "#F64E60", "#00AB9A", "#6993FF"];

export default function SalesByCountryChart() {
  const { data } = useDashboard();
  const displayData = data?.salesByCountry || [];

  return (
    <div className="bg-white shadow-xl rounded-xl p-3 sm:p-4 w-full flex flex-col h-full">
      {/* Title */}
      <h3 className="mb-2 font-semibold text-[#05004E] text-sm sm:text-base md:text-lg">
        Sales Mapping by Country
      </h3>

      {/* Map Container */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[800px] h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
          <VectorMap
            map={worldMill}
            backgroundColor="transparent"
            zoomOnScroll={false}
            zoomButtons={false}
            regionStyle={{
              initial: {
                fill: "#E5E7EB",
                stroke: "#D1D5DB",
                "stroke-width": 0.5,
              },
              hover: {
                fill: "#5E32CA",
                "fill-opacity": 0.9,
              },
            }}
            series={{
              regions: [
                {
                  scale: colorScale,
                  values: displayData,
                  min: 0,
                  max: Math.max(...Object.values(displayData), 100), // dynamic max
                },
              ],
            }}
            onRegionTipShow={(e, label, code) => {
              const sales = displayData[code] || 0;
              label.html(`
                <div style="
                  background-color: white;
                  border-radius: 6px;
                  padding: 3px 7px;
                  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
                  color: #111827;
                  font-size: 11px;
                ">
                  <strong>${label.html()}</strong><br/>
                  Sales: ${sales.toLocaleString()}
                </div>
              `);
            }}
          />
        </div>
      </div>
    </div>
  );
}
