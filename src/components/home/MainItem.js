import { Doughnut } from "react-chartjs-2";
import { Chart,ArcElement, Tooltip, Legend } from "chart.js";


Chart.register(
    ArcElement,
    Tooltip,
    Legend
)



export const MainItem = ({orders}) => {


    const bifoldCount = orders.filter((order) => order.mainItem === "Bifolds").length
    const trifoldCount = orders.filter((order) => order.mainItem === "Trifolds").length
    const serviceCardCount = orders.filter((order) => order.mainItem === "Service Cards").length



    const data = {
        labels: [
          'Bifold',
          'Trifold',
          'Service Card'
        ],
        datasets: [{
          label: 'Total',
          data: [bifoldCount, trifoldCount, serviceCardCount],
          backgroundColor: [
            '#7e57c2',
            '#b771ff',
            '#db71ff'
          ],
          hoverOffset: 4
        }]
      };


    const config = {
      };



      return <Doughnut data={data} options={config}></Doughnut>
}