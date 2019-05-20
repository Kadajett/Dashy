import React, { useState, useEffect } from 'react';
import "./finance.css";
import { Line } from 'react-chartjs-2';
import * as V from 'victory';
import moment from 'moment';


const chartDataFresh = {
    data: []
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
        setInterval(() => {
            props.getPriceData();
        }, 60000)
        
        // resetChart();
    }, [])

    useEffect(() => {
        let newChartData = {...chartDataFresh};
        
        
        // newChartData.datasets[0].label = `${props.product} Price Per minute`;
        if(props.price) {
            // newChartData.datasets[0] = {};
            newChartData.data = [];
            props.price.forEach((price, index) => {
                
                if(price) {
                    // let a = moment();
                    // let b = moment(price.time);
                    // console.log(a.diff(b, 'minutes'))
                    if(price.price) {
                        newChartData.data.push({x: index, y: price.price})
                    }
                }
            })
        }

        resetChart({...newChartData})
    }, [props.price])

    function resetChart(newChart) {
        setChartData(newChart);
    }
  return (
    <div className="financeBlock">
            <h2 className="subText">{props.product}</h2>
            <V.VictoryChart
                theme={V.VictoryTheme.material}
                >
                <V.VictoryLine
                    style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc"}
                    }}
                    data={chartData.data}
                />
            </V.VictoryChart>
        </div>
  )
}



