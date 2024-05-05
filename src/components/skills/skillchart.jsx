import React from 'react';
import { Bar } from 'react-chartjs-2';

const SkillsChart = () => {
  // Define skills and their respective levels
  const skills = ['Python', 'Machine Learning', 'Data Visualization', 'Problem Solving', 'Communication', 'Teamwork'];
  const levels = [90, 80, 85, 95, 85, 90]; // Levels out of 100

  // Data for the chart
  const data = {
    labels: skills,
    datasets: [
      {
        label: 'Skill Level',
        backgroundColor: 'skyblue',
        data: levels,
      },
    ],
  };

  // Options for the chart
  const options = {
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 100,
        },
      }],
    },
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'My Skills',
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SkillsChart;
