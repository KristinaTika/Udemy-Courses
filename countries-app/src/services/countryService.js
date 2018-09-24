import { allCountriesEndpoint, countryNameEndpoint } from '../shared/constants';
import { Country } from "../entities/Country";
import axios from "axios";

class CountryService {

    fetchAllCountries() {
        return axios.get(allCountriesEndpoint)
            .then(res => {
                // console.log(res.data);
                return res.data.map(country => {
                    const name = country.name;
                    const flag = country.flag;
                    const myCountry = {
                        name,
                        flag
                    }

                    return myCountry;
                });
            });
    }

    fetchSingleCountry(value) {
        return axios.get(`${countryNameEndpoint}${value}?fullText=true`)
            .then(res => mapCountries(res));
                // console.log(res.data);
                // return res.data.map(country => {
                //     const name = country.name;
                //     const domain = mapArray(country.topLevelDomain);
                //     const nameCode = country.alpha3Code;
                //     const callingCode = mapArray(country.callingCodes);          
                //     const capital = country.capital;
                //     const region = country.region;
                //     const subregion = country.subregion;
                //     const population = country.population;
                //     const map = {
                //         lat:country.latlng[0],
                //         lng:country.latlng[1]
                //     }
                //     const timezone = mapArray(country.timezones);                    
                //     const borders = mapArray(country.borders);
                //     const nativeName = country.nativeName;
                //     const currencies = mapCurrencies(country.currencies);
                //     const languages = mapLanguages(country.languages);
                //     const translations = mapTranslations(country.translations);
                //     const flag = country.flag;
                //     const regionalBlocs = mapBlocks(country.regionalBlocs);
                //     const myCountry = new Country(name, domain, nameCode, callingCode, capital, region, subregion, population, map, timezone, borders, nativeName, currencies, languages, translations, flag, regionalBlocs);
                //     console.log(myCountry);
                //     return myCountry;
                // });   
    }
}

const mapCountries = (res) => {
    return res.data.map(country => {
        const name = country.name;
        const domain = mapArray(country.topLevelDomain);
        const nameCode = country.alpha3Code;
        const callingCode = mapArray(country.callingCodes);          
        const capital = country.capital;
        const region = country.region;
        const subregion = country.subregion;
        const population = country.population;
        const map = {
            lat:country.latlng[0],
            lng:country.latlng[1]
        }
        const timezone = mapArray(country.timezones);                    
        const borders = mapArray(country.borders);
        const nativeName = country.nativeName;
        const currencies = mapCurrencies(country.currencies);
        const languages = mapLanguages(country.languages);
        const translations = mapTranslations(country.translations);
        const flag = country.flag;
        const regionalBlocs = mapBlocks(country.regionalBlocs);
        const myCountry = new Country(name, domain, nameCode, callingCode, capital, region, subregion, population, map, timezone, borders, nativeName, currencies, languages, translations, flag, regionalBlocs);
        // console.log(myCountry);
        return myCountry;
    });   
}


const mapArray =(array) => {
    return array.map(element => {
        return element;
    })
}

const mapCurrencies =(array) => {
    return array.map(element => {
        return `${element.name}, ${element.code}`;
    })
}

const mapLanguages =(array) => {
    return array.map(element => {
        return `${element.name}, ${element.nativeName}`;
    })
}

const mapTranslations = (element) => {
        return `br: ${element.br}, de: ${element.de}, es: ${element.es}, fa: ${element.fa}, fr: ${element.fr}, hr: ${element.hr}, it: ${element.it}, ja: ${element.ja}, nl: ${element.nl}, pt: ${element.pt}`;
}

const mapBlocks =(array) => {
    return array.map(element => {
        return `${element.name}, ${element.acronym}`;
    })
}

// const mapArray = array => array.map(element => element)

export const countryService = new CountryService();