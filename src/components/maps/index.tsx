// import {GoogleApiWrapper, Map} from 'google-maps-react';

// const style = {
//   width: '100%',
//   height: '100%'
// }

// const MapContainer = (props: any) => {

//   const points = [
//     { lat: 42.02, lng: -77.01 },
//     { lat: 42.03, lng: -77.02 },
//     { lat: 41.03, lng: -77.04 },
//     { lat: 42.05, lng: -77.02 }
// ]
// const bounds = new props.google.maps.LatLngBounds();
//   for (var i = 0; i < points.length; i++) {
//     bounds.extend(points[i]);
//   }

//   return (
//     <Map
//           google={props.google}
//           style={style}
//           initialCenter={{
//             lat: 42.39,
//             lng: -72.52
//         }}
//         bounds={bounds}
//         ></Map>
//   )
// }
// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyCDPcB9Wx3LOeiPs_WtWl8Eb6CHsaWz5kQ')
// })(MapContainer)

import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { MenuMaps } from '../menu';

const containerStyle = {
  width: '100%',
  height: '450px'
};

const center = {
  lat: 19.4399935,
  lng: -70.7430645
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB3fqFIrAalKjOT7mRuSXWie24PVBqwSds"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  if(!isLoaded) {
    return (
      <>
        <h1 style={{textAlign: 'center'}}>Loading Maps</h1>
      </>
    )
  }


  return  (
    <Container>
      <Row>
        <Col>
            <h2>Filtros:</h2>
        </Col>
        <br />
        <Col sm={12} md={12}>
          <MenuMaps />
        </Col>
      </ Row>
        <br />
      <Row>
        <Col md={12}>
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={9}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>  
          <br />
        </Col>  
      </Row>
    </Container>
    
  )
}

export default React.memo(MyComponent)