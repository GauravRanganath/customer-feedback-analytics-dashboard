import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
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

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const convertTotalRatingsToObject = (interactionTypes) => {
  const labels = Object.keys(interactionTypes);
  const data = labels.map((key) => interactionTypes[key]);

  return { labels, data };
};

export const InteractionsChart = () => {
  const data = useSelector((state) => state.feedback.value);
  const interactionsData = data.feedbackStatistics.interactionTypes;
  const formattedData = convertTotalRatingsToObject(interactionsData);

  const chartData = {
    labels: formattedData.labels,
    datasets: [
      {
        data: formattedData.data,
        backgroundColor: [
          "rgba(23, 37, 84, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
        ],
        borderColor: [
          "rgba(23, 37, 84, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="my-4 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-4">
        <h1 className="font-semibold">Interaction Type</h1>
      </div>
      <div className="px-4 py-4">
        <Doughnut options={options} data={chartData} />
      </div>
    </div>
  );
};
