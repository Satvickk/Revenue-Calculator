import { Chart, registerables } from "chart.js";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { getRevenueTimeFrame } from "../../utils/generateRevenue";

function ProjectedOutput() {
  const GrowthData = useSelector((state) => state.GrowthData);
  const ref = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    Chart.register(...registerables);

    if (!GrowthData || GrowthData.length === 0) {
      return;
    }

    const xValues = GrowthData.map((_, index) => getRevenueTimeFrame() + index + 1);

    const baseValues = GrowthData.map((data) => data.baseValue);
    const growthValues = GrowthData.map((data) => data.growthValue);

    const maxGrowth = Math.max(...baseValues) + Math.max(...growthValues);
    const yAxisMax = Math.ceil(maxGrowth / 100) * 100;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ref.current, {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [
          {
            label: "Total Revenue",
            backgroundColor: "#1D4ED8",
            data: baseValues,
          },
          {
            label: "Growth",
            backgroundColor: "rgba(34, 197, 94, 1)",
            data: growthValues,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
          title: {
            display: true,
            text: `Projected Revenue for ${getRevenueTimeFrame() + 1} - ${getRevenueTimeFrame() + 5}`,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: yAxisMax, 
            ticks: {
              stepSize: 100,
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [GrowthData]);

  return (
    <div className="w-full h-full p-3 bg-slate-100 flex justify-center items-center">
      {GrowthData?.length > 0 ? (
        <canvas ref={ref} id="myChart" style={{ width: "100%", maxWidth: "700px" }}></canvas>
      ) : (
        <span className="tracking-wider">No Data Available</span> 
      )}
    </div>
  );
}

export default ProjectedOutput;
