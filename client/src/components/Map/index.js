import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';


function Map() {
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat:36.166340, lng:-86.779068}}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function App() {
    return(
        <div style={{width:"100vh", height:"80vh"}}>
            <WrappedMap 
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyACzcnTqh0EIE1HAJ1E605RBcwlWHAQ0Mw"}
                loadingElement={<div style={{height:'100%'}} />}
                containerElement={<div style={{height:'100%'}} />}
                mapElement={<div style={{height:'100%'}} />}
            />
        </div>
    )
};