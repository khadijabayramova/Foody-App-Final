import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['KFC', 'McDonald', 'PapaJohns', 'Burger King'],  // Added new restaurant
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 8],  // Added data for Burger King
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8A2BE2'],  // Added color for Burger King
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8A2BE2'],  // Added hover color for Burger King
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
