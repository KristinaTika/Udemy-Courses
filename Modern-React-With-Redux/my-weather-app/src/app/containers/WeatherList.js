import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import './WeatherList.css'

class WeatherList extends Component {

    renderWeather() {

        const { weather } = this.props;
        return weather.map((cityData) => {
            const name = cityData.city.name;
            const temperatures = cityData.list.map(weather => weather.main.temp - 273.15);
            const pressure = cityData.list.map(weather => weather.main.pressure);
            const humidity = cityData.list.map(weather => weather.main.humidity);

            return (
                <ul key={name} id="list-chart">
                    <li><b>{name}</b></li>
                    <li>
                        <Chart data={temperatures} color="red" unit="C" />
                    </li>
                    <li>
                        <Chart data={pressure} color="green" unit="mbar" />
                    </li>
                    <li>
                        <Chart data={humidity} color="blue" unit="%" />
                    </li>
                </ul>
            );
        });
    }

    render() {
        return (
            <ul id="weather-list">
                <li>
                    <ul id="list-titles">
                        <li><b>City</b></li>
                        <li><b>Temperature (C)</b></li>
                        <li><b>Pressure (mbar)</b></li>
                        <li><b>Humidity (%)</b></li>
                    </ul>
                </li>

                <li>

                    {this.renderWeather()}

                </li>
            </ul>
        );
    }
}

const mapStateToProps = ({ weather }) => {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);