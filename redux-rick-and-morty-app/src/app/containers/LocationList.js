import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../action-creators/actionCreators';
import LocationItem from '../components/LocationItem';
import './LocationList.css';

class LocationList extends Component {


    componentDidMount() {
        this.props.fetchLocations();
    }

    renderLocations() {
        const { location } = this.props;
        return location.map((loc) => {
            return <LocationItem key={loc.id} location={loc} />
        });
    }


    render() {
        return (
            <ul className="list-location">
                {this.renderLocations()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.location
    }
}

export default connect(mapStateToProps, { fetchLocations })(LocationList);