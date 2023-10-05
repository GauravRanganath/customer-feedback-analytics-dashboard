import React, { useEffect } from "react";
import { useSelector } from "react-redux";
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

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 0,
    },
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
  scales: {
    x: {
      display: false,
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const convertTotalRatingsToObject = (totalRatings) => {
  const labels = [];
  const data = [];

  for (let rating = 5; rating >= 1; rating--) {
    labels.push(rating.toString());
    data.push(totalRatings[rating.toString()] || 0);
  }

  return { labels: labels, data: data };
};

export const RatingsChart = () => {
  const data = useSelector((state) => state.feedback.value);
  const ratingsData = data.feedbackStatistics.totalRatings;
  const formattedData = convertTotalRatingsToObject(ratingsData);

  const chartData = {
    labels: formattedData.labels,
    datasets: [
      {
        label: "Total Ratings",
        data: formattedData.data,
        borderColor: "rgb(23 37 84)",
        backgroundColor: "rgb(23 37 84)",
      },
    ],
  };

  return (
    <div className="my-4 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-4">
        <h1 className="font-semibold">Total Ratings</h1>
      </div>
      <div className="px-4 py-4">
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
};
