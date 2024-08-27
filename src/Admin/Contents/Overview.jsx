import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Overview = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Group A',
            data: [60, 60, 40, 30, 20, 20, 20],
            backgroundColor: 'rgba(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 1)',
            barThickness: 7,
            barRadius: 20,
          },
          {
            label: 'Group B',
            data: [30, 20, 25, 20, 30, 30, 35],
            backgroundColor: 'rgba(255, 159, 64)',
            borderColor: 'rgba(255, 159, 64, 1)',
            barThickness: 7,
            barRadius: 20,
            borderWidth: 5,
          },
          {
            label: 'Group C',
            data: [10, 15, 30, 40, 45, 25, 45],
            backgroundColor: 'rgba(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 1)',
            barThickness: 7,
            barRadius: 20,
            borderWidth: 5,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display:false,
          },
          
        },
        scales: {
          y: {
            stacked: true,
            beginAtZero: true,
            min:0,
            max:100,
            stepSize:20,
            barPercentage: 0.8,
            caregoryPercentage: 0.8,
            ticks: {
                callback: function(value){
                    return value + '%'
                }
            },
            grid: {
              display:false,
            }
          },
          x: {
            stacked: true,
            grid: {
              display:false,
            }
          },
          
        },
      };
    
      return (
        <main className='my-5 p-2'>
          <h2 className="font-bold text-lg my-2">Attendance Overview</h2>
          <Bar data={data} options={options} />;
        </main>
      

      )
    };
 
export default Overview;