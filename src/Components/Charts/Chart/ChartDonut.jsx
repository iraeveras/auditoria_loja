import React from "react";
import Chart from "react-apexcharts";
function ChartDonut() {
    const state = {
        
            series: [19, 55, 41, 17, 15],
            options: {
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    return (
        <>
            <Chart 
            options={state.options}
            series={state.series}
            type="donut"
            height={350} />
        </>
    )
}

export default ChartDonut