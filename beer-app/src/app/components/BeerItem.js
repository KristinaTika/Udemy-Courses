import React from 'react';
import './BeerItem.css';
import GoogleMap from './GoogleMap';


const BeerItem = (props) => {

    const { city, country, lat, lon, name, phone, postalCode, state, street, type, website } = props.beer;

    return (
        <li>
            <div>Name: {name}</div>
            <div>Type: {type}</div>
            <div>Street: {street}</div>
            <div>City: {city}</div>
            <div>Postal Code: {postalCode}</div>
            <div>State: {state}</div>
            <div>Country: {country}</div>
            <div>Phone: {phone}</div>
            <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91477035437!2d" + lat + "!3d" + lon + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2srs!4v1537194046882"} width="300" height="300" style={{border: 0, margin: "20px"}} allowFullScreen ></iframe>
            {/* <GoogleMap lon={lon} lat={lat} /> */}
            <div>Website: <a href={website}>{website}</a></div>
        </li>
    );
};

export default BeerItem;

