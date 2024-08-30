import React from 'react';
import './PieChart.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const totalSales = 2659;
  const data = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        label: 'Portion of Sales',
        data: [55.8, 44.2],
        backgroundColor: ['#FF6384', '#36A2EB'], // pink and teal colors
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 8,
          },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const label = context.label;
            const value = context.raw;
            return `${label}: ${value}%`;
          },
        },
        bodyFont: {
          size: 8,
        },
      },
      datalabels: {
        display: true,
        color: '#fff',
        formatter: (value) => `${value}%`,
        font: {
          size: 10,
          weight: 'bold',
        },
        padding: {
          bottom: 4,
        },
        anchor: 'center',
        align: 'center',
      },
      centerText: {
        display: true,
      },
    },
    layout: {
      padding: {
        bottom: 30,
      },
    },
  };

  // Custom Plugin to display the text in the center
  const centerTextPlugin = {
    id: 'centerText',
    afterDraw(chart) {
      const { width, height, ctx } = chart;
      ctx.restore();

      const fontSize = 12;
      const fontSizev = 16;
      const fontWeightv = 'bold';
      ctx.font = `${fontSize}px Arial`;
      ctx.textBaseline = 'middle';

      const text = 'Total Sales';
      const value = `${totalSales}`;

      // Calculate the positions for both text and value
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const valueX = Math.round((width - ctx.measureText(value).width) / 2);
      const textY = height / 2 - fontSize / 2;
      const valueY = height / 2 + fontSize;

      // Draw 'Total Sales' text in one color
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = '#808080'; // Red color for the text
      ctx.fillText(text, textX, textY);

      // Draw total sales value in another color
      ctx.font = `${fontWeightv} ${fontSizev}px Arial`;
      ctx.fillStyle = '#000000'; // Blue color for the value
      ctx.fillText(value, valueX, valueY);

      ctx.save();
    },
  };

  return (
    <div className='pChart'>
      <h2>Portion of Sales</h2>
      <Pie data={data} options={options} plugins={[centerTextPlugin]} />
      <p>Total Sales: 2,659</p>
    </div>
  );
};

export default PieChart;
