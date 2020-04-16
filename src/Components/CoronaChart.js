import React, { Component } from "react";
import CanvasJSReact from '../assets/canvasjs.react'

export const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class CoronaChart extends Component {
    render() {
        if (this.props.selectedCountries.length === 0)
            return <div></div>;

        let dataPoints = this.props.data.filter(x => this.props.selectedCountries.includes(x.country))
            .map(x => ({
                type: "spline",
                dataPoints: x.dataPoints.map(point => ({ x: point.date, y: point.confirmed })),
                legendText: x.country
            }));
        let axisY = this.props.selectedCountries.map(x => ({
            title: x,
            logarithmic: false
        }));
        const options = {
            title: {
                text: "Corona Cases"
            },
            showInLegend: true,
            data: dataPoints,
            axisY
        }

        return (<React.Fragment>
            <div>
                <CanvasJSChart options={options} />
            </div>
        </React.Fragment >);
    }
}
