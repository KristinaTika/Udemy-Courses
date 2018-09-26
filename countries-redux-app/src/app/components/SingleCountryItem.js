import React from 'react';
import "./SingleCountryItem.css";
import CountryMap from './CountryMap';

const SingleCountryItem = (props) => {

    const mapItems = (items) => {
        if (items.length === 0) {
            return <div> No info available </div>
        }
        return items.map((item) => {
            return <li key={item}>{item} </li>
        })
    }

    const checkString = (string) => {
        return string ? string : "No info available"
    }

    const renderCurrencies = (cr) => {
        return cr.map(c => c.name)
    }

    const mapTranslations = (element) => {
        return `br: ${element.br}, de: ${element.de}, es: ${element.es}, fa: ${element.fa}, fr: ${element.fr}, hr: ${element.hr}, it: ${element.it}, ja: ${element.ja}, nl: ${element.nl}, pt: ${element.pt}`;
    }

    const { name, domain, nameCode, callingCode, capital, region, subregion, population, timezone, borders, nativeName, currencies, languages, translations, flag, regionalBlocs, map } = props.country;

    const trans = mapTranslations(translations).split(", ");

    return (
        <div id="single-country-container">
            <h1> {name}</h1>
            <div id="flag-map-wrapper">
                <div className="flag">
                    <img src={flag} alt={name} />
                </div>
                <CountryMap map={map} name={name} />
            </div>
            <h3> Native name</h3>
            <p>  {checkString(nativeName)}</p>
            <h3> Capital city</h3>
            <p> {checkString(capital)}</p>
            <h3> Calling code</h3>
            <ul>  {mapItems(callingCode)}</ul>
            <h3> Name code</h3>
            <p>  {checkString(nameCode)}</p>
            <h3> Timezone </h3>
            <ul> {mapItems(timezone)}</ul>
            <h3>  Domain</h3>
            <ul> {mapItems(domain)}</ul>
            <h3> Borders </h3>
            <ul>
                {mapItems(borders)}
            </ul>
            <h3> Currencies </h3>
            <ul>
                {mapItems(renderCurrencies(currencies))}
            </ul>
            <h3>  Languages</h3>
            <ul>
                {mapItems(renderCurrencies(languages))}
            </ul>
            <h3> Population </h3>
            <p> {checkString(population)}</p>
            <h3>  Region</h3>
            <p>{checkString(region)}</p>
            <h3>  Subregion</h3>
            <p> {checkString(subregion)}</p>
            <h3>  Regional blocs</h3>
            <ul>
                {mapItems(renderCurrencies(regionalBlocs))}
            </ul>
            <h3> Pronunciations</h3>
            <ul>
                {mapItems(trans)}
            </ul>
        </div>
    );
};

export default SingleCountryItem;