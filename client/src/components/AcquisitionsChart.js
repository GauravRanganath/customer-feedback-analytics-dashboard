import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

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

const convertAcquisitionTypesToObject = (acquisitionTypes) => {
  const labels = Object.keys(acquisitionTypes);
  const data = labels.map((key) => acquisitionTypes[key] || 0);

  return { labels, data };
};

export const AcquisitionsChart = () => {
  const data = useSelector((state) => state.feedback.value);
  const acquisitionsData = data.feedbackStatistics.acquisitionTypes;
  const formattedData = convertAcquisitionTypesToObject(acquisitionsData);

  const chartData = {
    labels: formattedData.labels,
    datasets: [
      {
        label: "# of Responses",
        data: formattedData.data,
        backgroundColor: "rgba(23, 37, 84, 0.2)",
        borderColor: "rgba(23, 37, 84, 1)",
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    console.log(acquisitionsData);
  }, [acquisitionsData]);

  useEffect(() => {
    console.log(formattedData);
  }, [formattedData]);

  useEffect(() => {
    console.log(chartData);
  }, [chartData]);

  return (
    <div className="my-4 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-4">
        <h1 className="font-semibold">Customer Acquisition Method (CAM)</h1>
      </div>
      <div>
        <Radar options={options} data={chartData} />
      </div>
    </div>
  );
};
