import React, { Component } from 'react';

class GoogleMap extends Component {

    componentDidMount() {

        // new google.maps.Map ->  this is how we create an embedded google map inside our document, ACCEPTS:
        //  1) direct reference to an HTML element that is rendered on the page
        //  2) options object ->
        //      - zoom -> how much a map can be zoomed, 
        //      - center -> where we want the map to be centered 
        
        new google.maps.Map(this.refs.map, { 
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon,
            }
        });
    }

    render() {
        return (
            //this.refs.map
            <div ref="map"></div>
        );
    }
}
// ref -> direct reference to an HTML element that is rendered on the page

export default GoogleMap;