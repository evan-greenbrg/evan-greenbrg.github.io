import React from "react"
import GoogleMapReact from "google-map-react"
import PropTypes from "prop-types"
import styled from "@emotion/styled" 

import { rhythm } from "../../utils/typography"
import "../layout.css"

const MapContainer = styled.div`
	width: 78vw;
	height: 70vh;
	margin: auto;
`
const isClient = typeof window !== 'undefined';

const Marker = props => {
	return <span className="dot"></span>
}

const GoogleMap = (props) => {
  const lat = parseFloat(34.095);
  const lng = parseFloat(-118.301);
  const apikey = "AIzaSyBYZS57LmQEMORfDZbZHOl5D6TA8RZrVZA"
  
  return (
    <section className="google-map">
      <MapContainer className="map">
        { isClient && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: apikey }}
            defaultCenter={[lat, lng]}
            defaultZoom={8}
          >
			<Marker lat={lat} lng={lng} />
          </GoogleMapReact>
        )}
      </MapContainer>
    </section>
  );
}
     
export default GoogleMap
