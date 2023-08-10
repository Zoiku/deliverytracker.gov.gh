import "../styles/Chart.css";
import { Stack } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const mobileOptions = {
  indexAxis: "y",
  scales: {
    x: {
      font: {
        family: "Poppins",
      },
      max: 100,
      beginAtZero: true,
      ticks: {
        color: "gray",
        stepSize: 100,
        display: false,
      },
      grid: {},
    },
    y: {
      font: {
        family: "Poppins",
      },
      ticks: {
        color: "gray",
      },
      grid: {},
    },
  },
  elements: {
    bar: {},
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      display: false,
    },
    title: {
      display: false,
    },
  },
};

export const webOptions = {
  scales: {
    x: {
      grid: {
        display: false,
        color: "gray",
      },
      ticks: {
        color: "gray",
        font: {
          family: "Poppins",
          weight: 600,
        },
      },
    },
    y: {
      max: 100,
      display: false,
      grid: {
        display: false,
        color: "gray",
      },
      ticks: {
        color: "gray",
        stepSize: 100,
        callback: (value) => `${value} %`,
      },
    },
  },
  elements: {
    bar: {},
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = [
  "In Progress",
  "Compromised Promises",
  "Promises Kept",
  "Promises Broken",
  "Stalled Promises",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Hon. Frank Annoh-Dompreh",
      data: [5, 5, 80, 5, 5],
      backgroundColor: [
        "rgb(155, 153, 153)",
        "rgb(255, 165, 0)",
        "rgb(36, 178, 0)",
        "rgb(214, 51, 33)",
        "#523912",
      ],
    },
  ],
};

const PromisesChart = () => {
  return (
    <Stack spacing={3}>
      <Bar className="web-option" options={webOptions} data={data} />
      <Bar className="mobile-option" options={mobileOptions} data={data} />
      <div style={{ color: "gray", fontWeight: 500 }}>
        Key promises by Hon. Annoh-Dompreh details.{" "}
        <span className="promise-chart-link">
          Track all promises here.
        </span>
      </div>
    </Stack>
  );
};

export default PromisesChart;
