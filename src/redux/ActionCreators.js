import * as ActionTypes from './ActionTypes'


const assertOk = (response) => {
    if (response.ok) {
        return response
    }
    else {
        let error = new Error('Error' + response.status + ':' + response.statusText)
        error.response = response
        throw error
    }
}

export const fetchData = () => (dispatch) => {
    dispatch(dataLoading())
    fetch('https://pomber.github.io/covid19/timeseries.json')
        .then(response => assertOk(response))
        .then(response => response.json())
        .then(data => calculateGrowthRate(data))
        .then(data => dispatch(dataLoaded(data)))
        .catch(error => dispatch(dataFailed(error.message)))
}

export const dataLoading = () => ({
    type: ActionTypes.DATA_LOADING
})

export const dataLoaded = (data) => ({
    type: ActionTypes.DATA_LOADED,
    payload: data
})


export const dataFailed = (errMsg) => ({
    type: ActionTypes.DATA_FAILED,
    payload: errMsg
})

const calculateGrowthRate = (data) => {
    let previousConfimed = 0

    return Object.keys(data).map(key => ({
        country: key,
        dataPoints: data[key].map(point => ({
            date: new Date(Date.parse(point.date)),
            confirmed: point.confirmed,            
            deaths: point.deaths,
            recovered: point.recovered
        }))
    }))

}