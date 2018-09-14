import React, { Component } from 'react';
import { locationService } from '../../services/locations';
import { charactersService } from '../../services/characters';
import './LocationItem.css';

class LocationItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            residents: [],
        }

        this.renderResidents = this.renderResidents.bind(this);
    }

    componentDidMount() {
        const { residents } = this.props.loc;
        return locationService.fetchResidents(residents)
            .then((res) => {
                this.setState({
                    residents: res
                })
            })
    }

    renderResidents() {
        const { residents } = this.state;
        return residents.map((res, i) => {
            return <li key={i}>{res}</li>
        })
    }

    render() {

        const { dimension, name, type } = this.props.loc;
        return (
            <div id="location-info">
                <p><b>Name:</b> {name}</p>
                <p><b>Dimension</b>: {dimension}</p>
                <p><b>Type:</b> {type}</p>
                <ul>
                    <b>Residents:</b>
                    {this.renderResidents()}
                </ul>
            </div>
        );
    }
}

export default LocationItem;