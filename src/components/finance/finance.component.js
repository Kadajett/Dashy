import React, { useState, useEffect } from 'react';
import "./finance.css";
import { Line } from 'react-chartjs-2';

const chartDataFresh = {
    labels: [],
    datasets: [{
        label: 'Price Per Minute',
        data: [],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            // 'rgba(255, 99, 132, 1)',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)',
            // 'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        duration: 0
    },
    hover: {
        animationDuration: 0
    },
    responsiveAnimationDuration: 0,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: false
            }
        }]
    }
}

function msToTime(s) {
    // Pad to 2 or 3 digits, default is 2
  var pad = (n, z = 2) => ('00' + n).slice(-z);
  return pad(s/3.6e6|0) + ':' + pad((s%3.6e6)/6e4 | 0) + ':' + pad((s%6e4)/1000|0) + '.' + pad(s%1000, 3);
}

export default (props) => {
    let chartRef = React.createRef();
    const [chartData, setChartData] = useState({...chartDataFresh});
    useEffect(() => {
        props.getPriceData();
        resetChart();
    }, [])

    useEffect(() => {
        let newChartData = {...chartDataFresh};
        console.log( chartDataFresh);
        resetChart({...newChartData});
        if(props.price) {
            // newChartData.datasets[0] = {};
            
            props.price.forEach(price => {
                if(price.time && newChartData.datasets[0].data) {
                    var time = msToTime(price.time)
                    newChartData.labels.push(time);
                    // debugger;
                    newChartData.datasets[0].data.push(price.close);
                }
            })
        }
        // debugger;
        // console.log(newChartData);
        resetChart({...newChartData})
    }, [props.price])

    function resetChart(newChart) {
        setChartData({})
        setChartData({...newChart})
        // debugger;
        if(chartRef && chartRef.current && chartRef.current.forceUpdate) {
            chartRef.current.forceUpdate()
        }
    }
  return (
    <div className="financeBlock">
            <h2 className="subText">Finance</h2>
            {/* {JSON.stringify(chartData)} */}
            <Line ref={chartRef} data={chartData} options={chartOptions}/>
        </div>
  )
}



