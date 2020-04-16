import React, { Component } from "react";
import { fetchData } from '../redux/ActionCreators'
import { connect } from 'react-redux'

import { CountryCheckbox } from "./CountryCheckbox";
import { CoronaChart } from "./CoronaChart";




const mapStoreStateToProps = state => {
    return {
        coronaData: state.data,
        errMessage: state.errMsg,
        isLoading: state.isLoading
    }
}
const mapDispatchToProps = (dispatch) => ({
    fetchData: () => { dispatch(fetchData()) }
})

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
    }
    componentDidMount() {
        this.props.fetchData()
    }

    countrySelected(country) {

        if (this.state.countries.includes(country)) {
            this.setState({ countries: this.state.countries.filter(x => x !== country) })
        } else {
            this.setState({
                countries: this.state.countries.concat(country)
            })
        }
    }

    render() {
        if (this.props.isLoading) {
            return <div><h1>Is Loading</h1></div>
        }
        else if (this.props.errMessage) {
            return <div>{this.props.errMessage}</div>
        }
        else if (this.props.coronaData) {
            let countries = this.props.coronaData.map(x => x.country)
            return <div>

                <CoronaChart data={this.props.coronaData} selectedCountries={this.state.countries}  ></CoronaChart>
                {countries.map(x => <CountryCheckbox country={x} onSelected={() => this.countrySelected(x)} />)}
            </div>
        }
        return <div></div>
    }
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(Main)