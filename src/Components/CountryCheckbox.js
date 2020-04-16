import React, { Component } from "react";
export class CountryCheckbox extends Component {
    render() {
        return <React.Fragment>
            <input type='checkbox' name={this.country + '-selector'} value={this.props.country} id={this.country + '-selector'} onClick={() => this.props.onSelected()} />
            <label for={this.props.country + '-selector'}>{this.props.country}</label>
        </React.Fragment>;
    }
}
