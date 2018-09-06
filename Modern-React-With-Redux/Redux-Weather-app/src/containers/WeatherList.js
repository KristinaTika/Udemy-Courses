import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';


class WeatherList extends Component {

    render() {

        let city = this.props.weather.map((cityData) => {
            const name = cityData.city.name;
            const temperatures = cityData.list.map(weather => weather.main.temp - 273.15);
            const pressure = cityData.list.map(weather => weather.main.pressure);
            const humidity = cityData.list.map(weather => weather.main.humidity);
            const { lon, lat } = cityData.city.coord;

            return (
                <tr key={name}>
                    <td><GoogleMap lon={lon} lat={lat} /></td>
                    <td>
                        <Chart data={temperatures} color="red" unit="C" />
                    </td>
                    <td>
                        <Chart data={pressure} color="green" unit="mbar" />
                    </td>
                    <td>
                        <Chart data={humidity} color="blue" unit="%" />
                    </td>
                </tr>
            );
        });

        return (
            <table className="tabel table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (mbar)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {city}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({ weather }) => {
    return { weather };
}



export default connect(mapStateToProps)(WeatherList);