import React from "react";

import GoogleMapReact from 'google-map-react';
import { apiKey } from "./apiKey";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Map = () => {
    const defaultProps = {
        center: {
            lat: 22.341900,
            lng: 91.815536
        },
        zoom: 11
    };
    return (
        <div style={{ height: '80vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key:apiKey }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};

export default Map;
