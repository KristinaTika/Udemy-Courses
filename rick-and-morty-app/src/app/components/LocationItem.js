import React, { Component } from 'react';
import { locationService } from '../../services/locations';
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
        if(residents.length === 0) {
            return <li>There are no residents.</li>
        }
        return residents.slice(0, 10).map((res, i) => {
            return <li key={i}>{res}</li>
        })
    }

    render() {

        const { dimension, name, type } = this.props.loc;
        return (
            <li>
                <p><b>Name:</b> {name}</p>
                <p><b>Dimension</b>: {dimension}</p>
                <p><b>Type:</b> {type}</p>
                <p><b>Residents:</b></p>
                <ul className="location-info">
                    {this.renderResidents()}
                </ul>
            </li>
        );
    }
}

export default LocationItem;