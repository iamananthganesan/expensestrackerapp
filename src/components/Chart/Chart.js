import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar';
const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(datapoint => datapoint.value)
    const totalMaxValue = Math.max(...dataPointsValues)
    return <div className='chart'>
        {props.dataPoints.map((datapoint) => {
            return <ChartBar
                key={datapoint.id}
                value={datapoint.value}
                label={datapoint.label}
                maxValue={totalMaxValue}
            />
        })}
    </div>
}

export default Chart;