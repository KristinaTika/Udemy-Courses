import { FETCH_WEATHER } from "../actions/index";





export const WeatherReducer = (state = [], action) => {

    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]); // moze i ovako
            return [action.payload.data, ...state];
    }


    return state;
}