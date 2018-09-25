import { FETCH_ALL_COUNTRIES, FETCH_SINGLE_COUNTRY, FETCH_REGION, FETCH_SEARCHED_COUNTRY, FETCH_CAPITAL } from '../action-creators/actions';

const initialState = {
    countries: [],
    singleCountry: [],
}

export const RootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ALL_COUNTRIES:
            return { ...state, countries: action.countries };
        case FETCH_SINGLE_COUNTRY:
            return { ...state, country: action.country };
        case FETCH_REGION:
            return { ...state, region: action.results };
        case FETCH_SEARCHED_COUNTRY:
            return { ...state, searchedCountry: action.searchedCountry };
        case FETCH_CAPITAL:
            return { ...state, searchedCapital: action.capital };
        default:
            return state;
    }
}