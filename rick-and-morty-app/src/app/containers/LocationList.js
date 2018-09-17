import React, { Component } from 'react';
import { locationService } from '../../services/locations';
import LocationItem from '../components/LocationItem';
import './LocationList.css';

class LocationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locations: [],
            residents: [],
        }

        this.renderLocations = this.renderLocations.bind(this);
    }

    componentDidMount() {
        return locationService.fetchLocations()
            .then((res) => {
                this.setState({
                    locations: res
                });
            });
    }

    renderLocations() {
        const { locations } = this.state;

        return locations.map((loc) => {
            return <LocationItem loc={loc} key={loc.id} />
        });
    }

    render() {
        return (
            <div>
                <h1>Locations: </h1>
                <ul id="location-list">
                    {this.renderLocations()}
                </ul>
            </div>
        );
    }
}

export default LocationList;