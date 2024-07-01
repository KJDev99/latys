import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns"; // date-fns adapter import
import React from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      border: false,
    },
    title: {
      display: true,
      text: "",
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.raw} units`;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      min: 0, // Start y-axis from 0
      suggestedMax: 120, // Suggest a max value for y-axis
    },
  },
  elements: {
    point: {
      radius: 2, // Hide points
      hoverRadius: 10, // Hide points on hover
    },
    line: {
      borderWidth: 2, // Line width
      borderCapStyle: "round", // Rounded line caps
      borderRadius: 10,
    },
  },
};

const gradientBackgroundPlugin = {
  id: "gradientBackground",
  beforeDraw: (chart, args, options) => {
    const ctx = chart.canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(
      0,
      chart.chartArea.bottom,
      0,
      chart.chartArea.top
    );
    gradient.addColorStop(0, "rgba(127, 102, 255, 0.2)");
    gradient.addColorStop(1, "rgba(127, 102, 255, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(
      chart.chartArea.left,
      chart.chartArea.top,
      chart.chartArea.right - chart.chartArea.left,
      chart.chartArea.bottom - chart.chartArea.top
    );
  },
};

ChartJS.register(gradientBackgroundPlugin);

export default function LineChart({ data }) {
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "",
        data: data,
        borderColor: "#7F66FF",
        fill: false,
      },
    ],
  };

  return (
    <div style={{ position: "relative" }} className="mt-[-20px] w-[full]">
      <Line options={options} data={chartData} height={350} width={0} />
      <svg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <defs>
          <linearGradient
            id="gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            className="translate-y-full"
          >
            <stop offset="0%" style={{ stopColor: "rgba(127, 102, 255, 1)" }} />
            <stop
              offset="100%"
              style={{ stopColor: "rgba(127, 102, 255, 0)", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
      </svg>
    </div>
  );
}
