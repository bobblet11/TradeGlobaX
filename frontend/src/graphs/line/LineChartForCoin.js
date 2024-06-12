import { Line } from "react-chartjs-2"

const months = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"];


const LineChartForCoin = ({coinRepresented, timeInterval}) => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Price tracking of "+coinRepresented,
          },
        },
      }
      let labels = []
      let productASales;
      let productBSales
      const currentDate = new Date();
      switch(timeInterval){
        case "Year":
            for (let i=9; i>-1; i--){
                labels.push(currentDate.getFullYear()-i)    
            }
            productASales = [120, 135, 125, 145, 160, 150, 170, 100, 120, 1231, 1231, 21, 22,22,512, 102, 120, 199, 102,132, 251, 22,131 ,133].slice(0, 10);
    
            productBSales = [120, 145, 125, 145, 160, 150, 700, 700, 120, 1321, 1231, 23, 26,221,512, 102, 120, 199, 102,132, 251, 22,131 ,133].slice(0, 10);       
            break;
        case "Month":
            labels = months.slice(0, currentDate.getMonth());
            productASales = [120, 135, 125, 145, 160, 150, 170].slice(0, currentDate.getMonth());
    
            productBSales = [80, 75, 95, 100, 110, 105, 120, 115].slice(0, currentDate.getMonth());
            break;
        case "Week":
            labels = days.slice(0, currentDate.getDay());
            productASales = [120, 135, 125, 145, 160, 150, 170].slice(0, currentDate.getDay());
    
            productBSales = [80, 75, 95, 100, 110, 105, 120, 115].slice(0, currentDate.getDay());
            break;
        case "Day":
            for (let i =0; i<24; i++){
                labels.push(i+":00")
            }
            productASales = [120, 135, 125, 145, 160, 150, 170, 100, 120, 1231, 1231, 21, 22,22,512, 102, 120, 199, 102,132, 251, 22,131 ,133].slice(0, currentDate.getHours());
    
            productBSales = [120, 145, 125, 145, 160, 150, 700, 700, 120, 1321, 1231, 23, 26,221,512, 102, 120, 199, 102,132, 251, 22,131 ,133].slice(0, currentDate.getHours());
            break;
            //if datapoint is missing for label point, keep it as INTER// store its index somewhere
        //then interpolate between all INTER values
        //that means I at most need HOURLY DATA. thats 3600 credits a month
        
      }
      
    

    
      const data = {
        labels,
        datasets: [
          {
            label: "Product A Sales",
            data: productASales,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132)",
          },
          {
            label: "Product B Sales",
            data: productBSales,
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235)",
          },
        ],
      }
    
      return <Line options={options} data={data} />
}

export default LineChartForCoin