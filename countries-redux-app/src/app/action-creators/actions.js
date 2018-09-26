import axios from 'axios';
import { allCountriesEndpoint, regionEndpoint, countryNameEndpoint, capitalEndpoint } from '../../shared/constants';
import { Country } from '../../entities/Country';

export const FETCH_CAPITAL = "FETCH_CAPITAL";
export const FETCH_SEARCHED_COUNTRY = "FETCH_SEARCHED_COUNTRY";
export const FETCH_REGION = "FETCH_REGION";
export const FETCH_ALL_COUNTRIES = "FETCH_ALL_COUNTRIES";
export const FETCH_SINGLE_COUNTRY = "FETCH_SINGLE_COUNTRY";

const mapCountries = (countries) => {
    return countries.map(country => {
        const name = country.name;
        const domain = country.topLevelDomain;
        const nameCode = country.alpha3Code;
        const callingCode = country.callingCodes;          
        const capital = country.capital;
        const region = country.region;
        const subregion = country.subregion;
        const population = country.population;
        const map = {
            lat:country.latlng[0],
            lng:country.latlng[1]
        }
        const timezone = country.timezones;                    
        const borders = country.borders;
        const nativeName = country.nativeName;
        const currencies = country.currencies;
        const languages = country.languages;
        const translations = country.translations;
        const flag = country.flag;
        const regionalBlocs = country.regionalBlocs;
        const myCountry = new Country(name, domain, nameCode, callingCode, capital, region, subregion, population, map, timezone, borders, nativeName, currencies, languages, translations, flag, regionalBlocs);
        return myCountry;
    });
}

const mapAllCountries = (countries) => {
    return countries.map(country => {
        const name = country.name;
        const flag = country.flag;
        const myCountry = {
            name,
            flag
        };

        return myCountry; 
    });
}

const handleAllCountries = (countries) => {

    const myCountries = mapAllCountries(countries);

    return {
        type: FETCH_ALL_COUNTRIES,
        countries: myCountries
    }
}

const handleSingleCountry = (countries) => {
    const myCountries = mapCountries(countries);

    return {
        type: FETCH_SINGLE_COUNTRY,
        country: myCountries
    }
}

export const fetchAllCountries = () => {
    return dispatch => {
        return axios.get(allCountriesEndpoint)
        .then(res => dispatch(handleAllCountries(res.data)))
    }
}

export const fetchSingleCountry = (name) => {
    return dispatch => {
        return axios.get(`${countryNameEndpoint}${name}`)
        .then(res => dispatch(handleSingleCountry(res.data)))
    }
}

const handleRegion = (results) => {
    return {
        type: FETCH_REGION,
        results
    }
}

export const fetchRegion = (region) => {
    return dispatch => {
        return axios.get(`${regionEndpoint}${region}`)
        .then(res => dispatch(handleRegion(res.data)))
    }
}

const handleSearchedCountry = (countries) => {
    const myCountries = mapAllCountries(countries);

    return {
        type: FETCH_SEARCHED_COUNTRY,
        searchedCountry: myCountries
    }
}

export const fetchSearchedCountry = (name) => {
    return dispatch => {
        return axios.get(`${countryNameEndpoint}${name}`)
        .then(res => dispatch(handleSearchedCountry(res.data)))
    }
}

const handleCapital = (countries) => {

    return {
        type: FETCH_CAPITAL,
        capital: countries
    }
}

export const fetchCapital = (capital) => {
    return dispatch => {
        return axios.get(`${capitalEndpoint}${capital}`)
        .then(res => dispatch(handleCapital(res.data)))
    }
}