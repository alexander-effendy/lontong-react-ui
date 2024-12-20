import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Statistics = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ], // Months
    datasets: [
      {
        label: "V",
        data: [3.8, 3.5, 3, 1, 0, 3, 2, 4, 1, 1, 2, 2.5], // Grade progress
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4, // Adds curve to the line,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 16
          }
        }
      },
      title: {
        display: true,
        text: "David's Climbing Progress (2024)" as const,
        font: {
          size: "16px"
        }
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Grade (V0 - V10)" as const, // Label for Y-axis
          font: {
            size: "14px"
          }
        },
        ticks: {
          stepSize: 1, // Increment by 1 grade level
          callback: (value: number) => `V${value}`, // Show "V" prefix
          font: {
            size: "14px",
          },
        },
        min: 0, // Minimum grade
        max: 10, // Maximum grade
      },
      x: {
        title: {
          display: true,
          text: "Months" as const, // Label for X-axis
          font: {
            size: "14px",
          },
        },
        ticks: {
          font: {
            size: "14px", // X-axis tick label text size
          },
        },
      },
    },
  };

  return (
    <section className="w-full h-full rounded-[20px] p-5 justify-center bg-white">
      <Line data={data} options={options} />
      <section className="flex">
        <Ascents />
      </section>
    </section>
  );
};

const Ascents = () => {
  return (
    <section className="flex flex-col bg-blue-200 w-1/3">
      <div className="flex justify-between w-full">
        <section className="flex">
          <span>grade</span>
          <span className="ml-[70px]">gym</span>
        </section>

        <section>
          <span>Bonus</span>
          <span>Points</span>
          <span>Expiry</span>
        </section>
        
      </div>
      <AscentComponent color="purple" grade="6" gym="9 Degrees Waterloo" expiry={40} bonus={20} points={700} />
      <AscentComponent color="purple" grade="6" gym="9 Degrees Waterloo" expiry={40} bonus={20} points={700} />
      <AscentComponent color="purple" grade="6" gym="9 Degrees Waterloo" expiry={40} bonus={20} points={700} />
    </section>
  )
}

interface AscentComponentProps {
  color: string;
  grade: string;
  gym: string;
  expiry: number;
  bonus: number;
  points: number,
}

const AscentComponent: React.FC<AscentComponentProps> = ({ color, grade, gym, bonus, points, expiry }) => {
  return (
    <section className="w-full flex items-center justify-between">
      {/* first: color and grade */}
      <section className="flex gap-1 items-center">
        <span className={`bg-${color}-500 rounded-full size-[10px]`} />
        <span>V{grade}</span>
        <section className="ml-[10px]">{gym}</section>

      </section>
      {/* second: gym name */}
      {/* third: numbers */}
      <section className="flex gap-[25px]">
        <span>{bonus}</span>
        <span>{points}</span>
        <span>{expiry}</span>
      </section>
    </section>
  )
}

export default Statistics;
