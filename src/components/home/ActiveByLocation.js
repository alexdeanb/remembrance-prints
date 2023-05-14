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

export const ActiveByLocation = ({ orders }) => {
  const options = {};

  const labels = [
    "Harper Mount",
    "West Harper",
    "Alexandria",
    "Ridgelook",
    "Henderboyville",
    "Mole & Gary",
    "Autumnfield",
  ];

  const HarperMountOrders = orders.filter(
    (order) => order.locationId === 1
  ).length;
  const WestHarperOrders = orders.filter(
    (order) => order.locationId === 2
  ).length;
  const AlexandriaOrders = orders.filter(
    (order) => order.locationId === 3
  ).length;
  const RidgelookOrders = orders.filter(
    (order) => order.locationId === 4
  ).length;
  const HenderboyvilleOrders = orders.filter(
    (order) => order.locationId === 5
  ).length;
  const MoleAndGaryOrders = orders.filter(
    (order) => order.locationId === 6
  ).length;
  const AutumnfieldOrders = orders.filter(
    (order) => order.locationId === 7
  ).length;

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Location Orders",
        data: [
          HarperMountOrders,
          WestHarperOrders,
          AlexandriaOrders,
          RidgelookOrders,
          HenderboyvilleOrders,
          MoleAndGaryOrders,
          AutumnfieldOrders,
        ],
        fill: false,
        backgroundColor: "#7e57c2",
        tension: 0.1,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
