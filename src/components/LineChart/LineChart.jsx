import React from 'react'
import './LineChart.css'
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: [
      '6/30/2024 - 7/6/2024',
      '7/7/2024 - 7/13/2024',
      '7/21/2024 - 7/27/2024',
    ],
    datasets: [
      {
        label: 'Sales (in thousands)',
        data: [1.4, 0.8, 0.45], // sales values
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        yAxisID: 'salesAxis',
        tension: 0.4,
        fill: true,
        borderWidth: 0.5, // Decrease the thickness of the sales line
      },
      {
        label: 'Orders',
        data: [4, 2, 2], // order values
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        yAxisID: 'ordersAxis',
        tension: 0.4,
        fill: true,
        borderWidth: 0.5, // Decrease the thickness of the orders line
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date Range',
        },
      },
      salesAxis: {
        type: 'linear',
        display: true,
        position: 'left',
        min: 0,
        max: 1.6,
        ticks: {
          callback: (value) => `${value}k`,
          stepSize: 0.4, // Set step size for salesAxis
        },
      },
      ordersAxis: {
        type: 'linear',
        display: true,
        position: 'right',
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1, // Set step size for ordersAxis
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += context.parsed.y;
            if (context.dataset.yAxisID === 'salesAxis') {
              label += 'k';
            }
            return label;
          },
        },
        bodyFont:{
          size: 10,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className='chrt'>
      <h2>Sales vs Orders</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
