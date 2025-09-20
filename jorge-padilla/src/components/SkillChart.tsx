import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillsChart: React.FC = () => {
  const data = {
    labels: ['C/C++', 'Python', 'Javascript', 'PHP', 'SQL/NoSQL', 'Java'],
    datasets: [
      {
        label: 'Nivel de Habilidad (1-10)',
        data: [9, 8.5, 9, 8.3, 8.5, 8.5],
        backgroundColor: 'rgba(78, 121, 167, 0.2)',
        borderColor: 'rgb(157, 178, 201)',
        borderWidth: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'var(--text-color)'
        },
        grid: {
          color: 'var(--border-color)'
        },
        pointLabels: {
          color: 'var(--text-color)',
          font: {
            size: 14 
          }
        },
        ticks: {
          display: false,
          beginAtZero: true,
          color: 'var(--text-color)',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'var(--text-color)',
          font: {
            size: 16
          }
        }
      },
      tooltip: {
        titleColor: 'var(--text-color)',
        bodyColor: 'var(--text-color)',
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border-color)',
        borderWidth: 1
      }
    }
  };

  return (
    <div style={{ position: 'relative', height: '400px', width: '100%' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default SkillsChart;