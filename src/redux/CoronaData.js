import * as ActionTypes from './ActionTypes'

export const CoronaData = (state = { isLoading: false, errMsg: null, data: null }, action) => {
    switch (action.type) {
        case ActionTypes.DATA_LOADING:
            return {
                ...state,
                isLoading: true,
                data: null,
                errMsg: null
            }
        case ActionTypes.DATA_LOADED:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                errMsg: null
            }
        case ActionTypes.DATA_FAILED:
            return {
                ...state,
                isLoading: false,
                data: null,
                errMsg: action.payload
            }
        default: return state
    }

}
